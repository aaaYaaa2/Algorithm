/**
 * Definition for Directed graph.
 * class DirectedGraphNode {
 *     int label;
 *     ArrayList<DirectedGraphNode> neighbors;
 *     DirectedGraphNode(int x) {
 *         label = x;
 *         neighbors = new ArrayList<DirectedGraphNode>();
 *     }
 * };
 */
public class RouteBetweenTwoNodes {
   /**
     * @param graph: A list of Directed graph node
     * @param s: the starting Directed graph node
     * @param t: the terminal Directed graph node
     * @return: a boolean value
     */
   // BFS iterative: 2721 middle
    public boolean hasRoute1(ArrayList<DirectedGraphNode> graph, 
                            DirectedGraphNode s, DirectedGraphNode t) {
        // write your code here
        if(graph == null || s == null || t == null) return false;
        Queue<DirectedGraphNode> queue = new LinkedList<DirectedGraphNode>();
        Set<DirectedGraphNode> visited = new HashSet<DirectedGraphNode>();
        
        queue.offer(s); 
        
        while(queue.size() > 0){
            int curSize = queue.size();
            for(int i=0; i < curSize; i++){
                DirectedGraphNode cur = queue.poll();
                if(cur == t) return true;
                visited.add(cur);
                if(cur.neighbors.size() > 0){
                    for(DirectedGraphNode nghb : cur.neighbors){
                        // avoid cyclic 
                        if(!visited.contains(nghb)) queue.offer(nghb);
                    }
                }
            }
        }
        return false;
    }

    // DFS iterative : 2691 ms fastest 
    public boolean hasRoute2(ArrayList<DirectedGraphNode> graph, 
                            DirectedGraphNode s, DirectedGraphNode t) {
        // write your code here
        if(graph == null || s == null || t == null) return false;
        Stack<DirectedGraphNode> stack = new Stack<DirectedGraphNode>();
        Set<DirectedGraphNode> visited = new HashSet<DirectedGraphNode>();
        
        stack.push(s); 
        
        while(stack.size() > 0){
           DirectedGraphNode node = stack.pop();
           if(node == t) return true;
           visited.add(node);
           if(node.neighbors.size()>0){
               for(DirectedGraphNode curNd : node.neighbors){
                   if(!visited.contains(curNd)) stack.push(curNd);
               }
           }
        }
        return false;
    }

    // DFS recursive : 3245ms, slowest 
    public boolean hasRoute3(ArrayList<DirectedGraphNode> graph, 
                            DirectedGraphNode s, DirectedGraphNode t) {
        // write your code here
        if(graph == null || t == null || s == null) return false;
        Set<DirectedGraphNode> visited = new HashSet<DirectedGraphNode>();
        return hasRouteHelper(graph, s, t, visited);
    }
    
    private boolean hasRouteHelper(ArrayList<DirectedGraphNode> graph,
                                   DirectedGraphNode s, DirectedGraphNode t,
                                   Set<DirectedGraphNode> visited){
        if(s == t){
            return true;
        }else{
            visited.add(s);
            if(s.neighbors.size()>0){
                for(DirectedGraphNode node : s.neighbors){
                    if(visited.contains(node)) continue;
                    if(hasRouteHelper(graph, node, t, visited)) return true;
                }
            }
            return false;
        }
    }
}