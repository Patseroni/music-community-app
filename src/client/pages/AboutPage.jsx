import Header from '../components/Header'
import MainContent from '../components/MainContent'
import styles from "../styles/aboutPage.module.css";

function AboutPage() {
    return (
        <>
            <Header />
            <MainContent>

                <div className={styles.aboutDiv}>
                    <h2>About this project</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis id pellentesque enim. Mauris suscipit urna in urna mattis ultricies.
                        Nullam gravida, tellus sit amet scelerisque egestas, turpis quam dignissim ex,
                        ut cursus purus quam sit amet nulla. Phasellus convallis sem vitae purus tincidunt, et
                        finibus velit finibus. Donec nec pretium libero. Nulla tincidunt lectus a est viverra feugiat.
                        <br /> <br />
                        Aliquam volutpat, dolor ac rhoncus varius, justo turpis viverra arcu, id ultricies dui dui sed risus.
                        Mauris dignissim tristique ultricies. Duis placerat, dolor at commodo dictum, nibh quam auctor risus, vitae
                        feugiat magna purus nec arcu. Suspendisse lobortis metus felis. Nulla at nibh ut libero convallis porta.
                        Vivamus luctus urna et purus maximus, at dapibus ipsum dapibus.
                        <br /> <br />

                    </p>
                </div>

            </MainContent>
        </>
    )
}

export default AboutPage