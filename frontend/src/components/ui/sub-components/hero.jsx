import { Button } from "../button"
import { ArrowRight } from "lucide-react"
import {TextEffect} from '../texteffect'

const Hero = () => {
    return (
        <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    <TextEffect preset="slide"delay={0.5} >
                    Create Stunning Websites
                    </TextEffect>

                        <TextEffect className={'bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500'}>
                            Fast and Easy
                        </TextEffect>
       
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                    Build professional websites in minutes with our drag-and-drop website builder. No coding skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white border-none"
                    >
                        Start Building Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-red-400 text-white hover:bg-red-400/10">
                        Watch Demo
                    </Button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="mt-16 relative w-full max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 rounded-xl" />
                <img
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Website builder interface"
                    width={1200}
                    height={600}
                    className="rounded-xl border border-red-400/20 shadow-2xl shadow-red-500/20 relative z-0"
                />
            </div>
        </section>


    )
}
export default Hero