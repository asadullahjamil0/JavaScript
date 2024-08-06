//How addEventListener function works

function addAnotherEventListener(typeOfEvent,callBack){
    var eventThatHappaned ={
            eventType:"keydown",
            key:"p",
            durationTime:2,
    }
    if (eventThatHappaned.eventType === typeOfEvent) {
        callBack(eventThatHappaned);
    }
}

addAnotherEventListener("keydown",function(event) {
    console.log(event);
})