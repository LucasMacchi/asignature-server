export default function(route_name: string): string{
    try {
        return "pinging "+route_name+" route, everything is working! "+new Date().toLocaleDateString()
    } catch (error) {
        if(error instanceof Error) return "ERROR = "+error.message
        else return "Error = " + error
    }
    
}