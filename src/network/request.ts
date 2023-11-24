
export type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface IHttpConfig<D> {
    url: string;
    data?: D;
    method: RequestMethod;
}

/*
 * Every API Response will be having a Generic Response structure
 * Sample generic server response will look as below.
 
    interface IHttpResponse {
        status: 'error' | 'success';
        statusCode: number; // indicates the Http Status code 
        message?: string; // any message from the Server
        data: unknown; // Data from the Server
    }
*/

const cookies = document.cookie.split(';').map(cookie => cookie.trim());
let authToken = '';
cookies.forEach(cookie => {
   const [cookieKey, cookieValue] = cookie.split('=');
   if(cookieKey === 'authToken'){
      authToken = cookieValue; 
   }
});

export async function request<D>(httpConfig: IHttpConfig<D>){
   try {
      const response = await fetch(httpConfig.url, {
         method: httpConfig.method,
         ...(httpConfig.data && {body: JSON.stringify(httpConfig.data)}),
         headers: {
            ['Authorization'] :`Token ${authToken}`
         }
      });

      const result = await response.json();

      if(response.status >= 200 && response.status < 300){ 
         return {status: 'success', data: result};
      }
      else {
         return {status: 'error', statuCode: result.statusCode, message: result.data || result.message};
      }
   }
   catch(error){
      return {status: 'error', message: error.getMessage()};
   }
}
