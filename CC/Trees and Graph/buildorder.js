/*
	@param Array of nodes : graph
	@return : Array of node : any building order 
*/

function DirectedGraphNode(val){
	this.val = val;
	this.neighbors = [];
}
// BFS 
var buildOrder1 = function(graph){
	// build parents count map 
	var map = new Map();
	for(var i=0; i<graph.length; i++){
		var curNode = graph[i];
		for(var j=0; j<curNode.neighbors.length; j++){
			if(map.has(curNode.neighbors[j])){
				map.set(curNode.neighbors[j], map.get(curNode.neighbors[j])+1);
			}else{
				map.set(curNode.neighbors[j], 1);
			}
		}
	}

	// find start point 
	var queue = [], result = [];
	for(var c=0; c<graph.length; c++){
		if(map.has(graph[c])){
			queue.push(graph[c]);
			result.push(graph[c]);
		}
	}

	// go for topological sort 
	while(queue.size()>0){
		var cur = queue.shift();
		for(var t=0; t<cur.neighbors.length; t++){
			map.set(cur.neighbors[t], map.get(cur.neighbors[t])-1);
			if(map.get(cur.neighbors[t])===0){
				queue.push(cur.neighbors[t]);
				result.push(cur.neighbors[t]);
			}
		}
	}
	return result;
};

// DFS 
var buildOrder2 = function(graph){
	// build parents count map 
	var map = new Map(), result = [];
	for(var i=0; i<graph.length; i++){
		var curNode = graph[i];
		for(var j=0; j<curNode.neighbors.length; j++){
			if(map.has(curNode.neighbors[j])){
				map.set(curNode.neighbors[j], map.get(curNode.neighbors[j])+1);
			}else{
				map.set(curNode.neighbors[j], 1);
			}
		}
	}
	// topological sort
	for(var k=0; k<graph.length; k++){
		if(!map.has(graph[k])) dfs(map, result, graph[k]);
	}
	return result;
};


function dfs (map, result, curNode){
	result.push(curNode);
	for(var i=0; i<curNode.neighbors.length; i++){
		map.set(curNode.neighbors[i], map.get(curNode.neighbors[i])-1);
		if(map.get(curNode.neighbors[i])===0) dfs(map, result, curNode.neighbors[i]);
	}
}