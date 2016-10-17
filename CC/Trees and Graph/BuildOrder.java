/**
 * Definition for Directed graph.
 * class DirectedGraphNode {
 *     int label;
 *     ArrayList<DirectedGraphNode> neighbors;
 *     DirectedGraphNode(int x) { label = x; neighbors = new ArrayList<DirectedGraphNode>(); }
 * };
 */
public class Solution {
    /**
     * @param graph: A list of Directed graph node
     * @return: Any topological order for the given graph.
     */    
    public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {
        // write your code here
        // build the map of parent count 
        HashMap<DirectedGraphNode, Integer> map = new HashMap<DirectedGraphNode, Integer> ();
        for(DirectedGraphNode node : graph){
            for(DirectedGraphNode neighbor : node.neighbors){
                if(map.containsKey(neighbor)){
                    map.put(neighbor, map.get(neighbor)+1);
                }else{
                    map.put(neighbor, 1);
                }
            }   
        }
        
        // search for the start point with no parents 
        Queue<DirectedGraphNode> queue = new LinkedList<DirectedGraphNode>();
        ArrayList<DirectedGraphNode> result = new ArrayList<DirectedGraphNode>();
        
        for(DirectedGraphNode node : graph){
            if(!map.containsKey(node)) {
                queue.offer(node);
                // add all nodes without any aprents, since they are all isolated 
                result.add(node);
            }
        }
        
        // topological sort
        while(!queue.isEmpty()){
            DirectedGraphNode cur = queue.poll();
            for(DirectedGraphNode neighbor : cur.neighbors){
                map.put(neighbor, map.get(neighbor)-1);
                if(map.get(neighbor) == 0) {
                    queue.offer(neighbor);
                    result.add(neighbor);
                }
            }
        }
        return result;
    }
}

// method two is DFS

/**
 * Definition for Directed graph.
 * class DirectedGraphNode {
 *     int label;
 *     ArrayList<DirectedGraphNode> neighbors;
 *     DirectedGraphNode(int x) { label = x; neighbors = new ArrayList<DirectedGraphNode>(); }
 * };
 */
public class Solution {
    /**
     * @param graph: A list of Directed graph node
     * @return: Any topological order for the given graph.
     */    
    public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {
        // write your code here
        HashMap<DirectedGraphNode, Integer> map = new HashMap<DirectedGraphNode, Integer>();
        ArrayList<DirectedGraphNode> result = new ArrayList<DirectedGraphNode>();
        for(DirectedGraphNode node : graph){
            for(DirectedGraphNode nbr : node.neighbors){
                if(map.containsKey(nbr)){
                    map.put(nbr, map.get(nbr)+1);
                }else{
                    map.put(nbr, 1);
                }
            }
        }
        
        for(DirectedGraphNode node : graph){
            if(!map.containsKey(node)) dfs(node, result, map);
        }
        return result;
    }
    
    private void dfs( DirectedGraphNode node, ArrayList<DirectedGraphNode> result, HashMap<DirectedGraphNode, Integer> map){
        
        result.add(node);
        for(DirectedGraphNode n : node.neighbors){
            map.put(n, map.get(n)-1);
            if(map.get(n)==0) dfs(n, result, map);
        }
    }
    
}