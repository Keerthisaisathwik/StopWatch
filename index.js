function Stopwatch(){
    let flag = false;
    let duration = 0;
    let startTime= new Date();
    let endTime = new Date();
    this.start = function(){
        if(flag)
            return new Error('watch is already started.');
        flag = true;
        startTime = new Date();
        //console.log('watch is running');
    }
    this.end = function(){
        if(!flag)
            return new Error('watch is not running');
        flag = false;
        //console.log('watch is stopped');
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime())/1000;
        console.log(duration);
    }
    this.reset = function(){
        startTime = null;
        endTime = null;
        flag = false;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });
}
const sw = new Stopwatch();
console.log(sw.duration);
