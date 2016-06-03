

app

      .constant("baseURL","http://localhost:3000/")

        .service('regService', ['$resource','baseURL',function($resource,baseURL) {
    
            
        
    
                
                    
                    return $resource(baseURL+"registers/:id",null,{'update':{method:'POST'}});
                    
                
    
                        
        }]);