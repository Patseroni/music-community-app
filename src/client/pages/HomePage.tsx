import Header from '../components/Header'
import MainContent from '../components/MainContent'
import InformationTop from '../components/InformationTop'

function HomePage() {
    return (
        <>
            <Header />
            <InformationTop />
            <MainContent>
                <h2>HomePage content</h2>
            </MainContent>
        </>

    );
}

export default HomePage