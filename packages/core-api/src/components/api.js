

const useApiFetch = (defaulBasetUrl = process.env.REACT_APP_BACKEND_URL) => {

    const apiFetch = async (url, method = 'GET', body = null) => {
        // Perform the API request using fetch
        let opt = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null
        };
        
        const response = await fetch(`${defaulBasetUrl}${url}`, opt);
    
        // Check if the response is successful
        if (response.ok) {
            // Parse the response data and return it
            const data = response.headers.get('content-length') !== '0' ? await response.json() : null;
            return { response, data };
        } else {
            let errorMessage;
            try {
                const errorResponse = await response.json();
                if (errorResponse.message) {
                    errorMessage = errorResponse.message;
                } else {
                    errorMessage = `API request failed with status: ${response.status}`;
                }
            } catch (error) {
                errorMessage = `API request failed with status: ${response.status}`;
            }
            throw new Error(errorMessage);
        }
    };

    return apiFetch;
};

export default useApiFetch;
