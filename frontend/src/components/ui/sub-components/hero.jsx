import {TextEffect} from '../texteffect';
import {Button} from '../button';
import {ArrowRight} from 'lucide-react';
import MouseIcon from '../../../assets/cursor.png';
import {TextLoop} from "@/components/ui/text-loop.jsx";
import * as motion from "motion/react-client"

const Hero = () => {
    const Icon = () => {
        return (
            <img src={MouseIcon} width={45} height={45}/>
        )
    }
    return (
        <section className="py-20 md:py-28 relative">
            {/* Hero background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/0 via-red-950/5 to-black/10 pointer-events-none"></div>

            <div className="container flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative">
                    <TextEffect per="word" as="h3" preset="slide" delay={0.4}>
                        Create Professional Invoices
                    </TextEffect>
                    <div className="relative inline-block">
                        <div
                            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-75 blur-md"></div>
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.6,
                                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},

                            }}>
                            <TextLoop className={'font-mono'}>
                                <span>In Second</span>
                                <span>Send Safely</span>
                            </TextLoop>
                        </motion.div>


                    </div>
                </h1>
                <p className="text-xl text-gray-300 max-w-[800px] mb-10">
                    Streamline your billing process with our easy-to-use invoice generator. Save time, get paid faster,
                    and
                    look professional.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                    <div className="relative group">
                        <div
                            className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        {/* Cursor visual effect inside parent */}

                        <Button
                            size="lg"
                            className="relative bg-gradient-to-r from-red-600 via-red-500 to-purple-700 hover:from-red-700 hover:to-purple-800 text-white border-0 gap-2"
                        >
                            Get Started Free
                            <ArrowRight className="h-4 w-4"/>
                        </Button>
                    </div>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                        See How It Works


                    </Button>


                </div>


                <div className="mt-16 relative w-full max-w-4xl">
                    <div
                        className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-lg opacity-75 blur-md"></div>
                    <div
                        className="relative rounded-lg border border-gray-800/50 bg-black/40 shadow-xl overflow-hidden backdrop-blur-sm">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-purple-900/5 to-transparent pointer-events-none"></div>
                        <img
                            src="/placeholder.svg?height=600&width=1200"
                            alt="Invoice dashboard preview"
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
