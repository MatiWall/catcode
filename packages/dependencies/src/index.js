import DependencyGraph from "./components/networkChart";
import Dependencies from "./components/deppendencies";


const DEPENDENCIES_ANNOTATION = 'catcode.io/dependencies'

const isDependenciesAvailable = (entity) => Boolean(entity?.metadata?.annotation?.[DEPENDENCIES_ANNOTATION])

export {
    DependencyGraph,
    Dependencies,
    isDependenciesAvailable
    
}


