function whosPaying(names) {
        
        
      var names = ["John", "Alice", "Bob", "Emily"];
      var namesLength = names.length;
      var randomPositionPeople = Math.floor(Math.random() * namesLength);
      var randomPerson = names[randomPositionPeople];
      
       return(randomPerson + " is going to buy lunch today!");
    
    
    }
    whosPaying();