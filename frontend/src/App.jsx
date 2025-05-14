import Navbar from './components/ui/sub-components/navbar'
import Hero from './components/ui/sub-components/hero'
const App = () => {

    return (
        <div>
            <Navbar/>
            <div className='flex-1 relative z-10'>
                <Hero/>
            </div>
        </div>
    )
}
export default App