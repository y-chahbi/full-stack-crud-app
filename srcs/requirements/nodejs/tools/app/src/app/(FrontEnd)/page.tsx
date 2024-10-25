import Body from "./components/Body";
import { useAppSelector } from "./redux/store";


export default function Home() {

    const username = useAppSelector((state) => state.authReducer.value.username);
    console.log("The username : ", username);
    return (
        <main>
            <Body/>
        </main>
    );
}
