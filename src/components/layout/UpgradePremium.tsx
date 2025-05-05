import { Button } from "@/components/ui/button"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import toast from "react-hot-toast"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useAuthStore } from "@/store/useAuthStore";
import { imagesBannerHighLight } from "@/constants";

type OrderActions = {
    order: {
        capture: () => Promise<{
            payer: {
                name: {
                    given_name: string;
                };
            };
        }>;
    };
};

const UpgradePremium = () => {
    const { user } = useAuthStore();

    const handleApprove = async (data: unknown, actions: unknown) => {
        try {
            const orderActions = actions as OrderActions;
            const details = await orderActions.order.capture();
            toast.success(`Thanh toán thành công bởi ${details.payer.name.given_name}`);

            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);
                const userData = userDoc.data();

                if (userData?.role !== "premium") {
                    await updateDoc(userRef, {
                        role: "premium",
                        premiumExpiration: new Date(),
                    });

                    useAuthStore.setState((state) => {
                        const updatedUser = state.user ? { ...state.user, role: "premium" } : null;
                        return { user: updatedUser };
                    });

                    localStorage.setItem('auth-storage', JSON.stringify({ state: { user: { ...auth.currentUser, role: "premium" } } }));
                    toast.success("Success! You've been upgraded to a Premium account.");
                }
            }
        } catch (error) {
            toast.error("Payment processing failed due to an error.");
            console.error(error);
        }
    };

    return (
        <>
            {user?.role !== "premium" && (
                <Dialog>
                    <DialogTrigger asChild >
                        <Button variant="default">Go Premium</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[url('/premium.jpg')] bg-cover bg-center">
                        <DialogHeader className="items-start">
                            <DialogTitle className="text-xl text-white pb-4">Premium Features</DialogTitle>
                            <DialogDescription className="text-white">
                                Real-time live scores for every match
                            </DialogDescription>
                            <DialogDescription className="text-white">
                                Follow top European leagues:
                            </DialogDescription>
                            <DialogDescription className="text-white grid grid-cols-[50px_1fr] gap-x-2">
                                <img src={imagesBannerHighLight.iconC1} alt="C1" width="50px" height="50px" />
                                <span className="flex items-center">Champions League</span>
                            </DialogDescription>
                            <DialogDescription className="text-white grid grid-cols-[50px_1fr] gap-x-2 justify-items-center">
                                <img src={imagesBannerHighLight.iconPL} alt="PL" width="30px" height="30px" />
                                <span className="flex items-center">Premier League</span>
                            </DialogDescription>
                            <DialogDescription className="text-white grid grid-cols-[50px_1fr] gap-x-2 justify-items-center">
                                <img src={imagesBannerHighLight.iconLiga} alt="LL" width="30px" height="30px" />
                                <span className="flex items-center">La Liga</span>
                            </DialogDescription>
                            <DialogDescription className="text-white grid grid-cols-[50px_1fr] gap-x-2 justify-items-center">
                                <img src={imagesBannerHighLight.iconSerieA} alt="SA" width="30px" height="30px" />
                                <span className="flex items-center">Serie A</span>
                            </DialogDescription>
                            <DialogDescription className="text-white grid grid-cols-[50px_1fr] gap-x-2 justify-items-center">
                                <img src={imagesBannerHighLight.iconL1} alt="FL1" width="30px" height="30px" />
                                <span className="flex items-center">Ligue 1</span>
                            </DialogDescription>
                            <DialogDescription className="text-white">
                                Full access to match schedules
                            </DialogDescription>
                            <DialogDescription className="text-white text-xl mx-auto">
                                All about 10$
                            </DialogDescription>
                        </DialogHeader>

                        <div className="py-4">
                            <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(_, actions) => {
                                    return actions.order.create({
                                        intent: "CAPTURE",
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: "10.00",
                                                    currency_code: "USD"
                                                },
                                                description: "Premium Account Upgrade",
                                            },
                                        ],

                                    });
                                }}
                                onApprove={handleApprove}
                                onError={(err) => {
                                    toast.error("Payment failed. Please try again later.")
                                    console.error(err)
                                }}
                            />
                        </div>

                    </DialogContent>
                </Dialog>
            )
            }
        </>
    )
}

export default UpgradePremium