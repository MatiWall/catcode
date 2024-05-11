import DependencyGraph from "./components/networkChart";
import Dependencies from "./components/deppendencies";


const DEPENDENCIES_ANNOTATION = 'catcode.io/dependencies'

function isDependenciesAvailable(entity){ 
    return Boolean(entity?.metadata?.annotations?.[DEPENDENCIES_ANNOTATION])
}

export {
    DependencyGraph,
    Dependencies,
    isDependenciesAvailable
    
}


