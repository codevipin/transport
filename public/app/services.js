

app

      .constant("baseURL","http://localhost:80/")

        .service('regService', ['$resource','baseURL',function($resource,baseURL) {
    
            
        
    
                
                    
                    return $resource(baseURL+"registers/:id",null,{'update':{method:'POST'}});
                    
                
    
                        
        }]);
