//Car Fleet: given an int 'target' & 2 arrays: position & speed where position[i] = starting position of car i & speed[i] = speed of car i; whenever 2 cars meet (before or exactly at target), they start moving together (with speed of both = min(speed1, speed2)). Find the no. of car fleets that will arrive at target. (a car fleet = a jhund of cars that arrive together at target). 

var carFleet = function(target, position, speed) {
    let tuples = position.map((pos, i) => [pos, (target-pos)/speed[i]]) //pairing up position & time required by that car to reach target
    tuples.sort((a,b) => b[0] - a[0]) //sorting tuples based on position (descending)
    let stack = []
    for(let t of tuples){
        if(!stack.length || stack[stack.length-1] < t[1]){
            stack.push(t[1])
        }
    }
    return stack.length
};