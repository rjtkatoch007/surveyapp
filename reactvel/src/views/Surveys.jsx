import PageComponent from '../components/PageComponent'
import { useStateContext } from '../contexts/ContextProvider'

function Surveys() {
    const { surveys } = useStateContext();
    console.log(surveys);
    return (
        <PageComponent title="Surveys">

        </PageComponent>
    )
}

export default Surveys

