// Course Schedule I
// DFS 
public class Solution {
// DFS OO version 
    static class Course {
        boolean visited = false;
        boolean tested = false;
        List<Course> pre = new ArrayList<Course>();
        public void add(Course c){
            pre.add(c);
        }
    }
    
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Course[] courses = new Course[numCourses];
        for(int i=0; i<numCourses; i++){
            courses[i] = new Course();
        }
        for(int i=0; i<prerequisites.length; i++){
            courses[prerequisites[i][0]].add(courses[prerequisites[i][1]]);
        }
        for(int i=0; i<numCourses; i++){
            if(isCyclic(courses[i])) return false; // check if there are cyclic exist in the all the prerequisite, like the find island method 
        }
        return true;
    }
    
    private boolean isCyclic(Course cur){
        if(cur.tested == true) return false;
        if(cur.visited == true) return true;
        cur.visited = true;
        for(Course c: cur.pre){
            if(isCyclic(c)){
                return true;
            }
        }
        cur.tested = true;
        return false;
    }
    // DFS normal version
    
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // prepare the graph
		int[] result = new int[numCourses];
		ArrayList[] graph = new ArrayList[numCourses];
		for(int n=0; n<graph.length; n++){
		    graph[n] = new ArrayList<Integer>();
		}
		for(int[] pair : prerequisites){
			graph[pair[1]].add(pair[0]);
		}// initialize the graph as prerequisite --> course, since course depends on their prerequisite. 
		boolean[] tempMark = new boolean[numCourses];

		for(int i=0; i<graph.size(); i++){
			if(!visit(graph, tempMark, i)) return false;
		}
		return true;
    }
    
    private boolean visit( ArrayList[] graph, boolean[] tempMark, int course){
		if(tempMark[course]) return false; 
		else 
			tempMark[course] = true;
		for(int i : graph[course]){
			if(!visit(graph, tempMark, i)){
				return false;
			}
		}
		tempMark[course] = false;
		return true;
	}
}

// BFS implementation 

// BFS Solution 
	public boolean canFinish(int numCourses, int[][] prerequisites) {
	    // prepare the graph and degree array 
	    ArrayList[] graph = new ArrayList[];
	    int number = 0;
	    int[] degree = new int[numCourses];
	    for(int i=0; i<prerequisites.length; i++){
	        graph[i] = new ArrayList<Integer>();
	    }
	    for(int[] pair : prerequisites){
	        graph[pair[1]] = pair[0];
	        degree[pair[1]]++;
	    }
	    
	    // BFS start!
	    Queue<Integer> queue = new LinkedList<>();
	    for(int m=0; m<numCourses; m++){
	        if(degree[m]==0) queue.offer(m);
	        number++;
	    }// initially we should start at the course that do not require any prerequisites 
	    
	    while(!queue.isEmpty()){
	        int course = queue.poll();
	        for(int pre : graph[course]){
	            degree[pre]--;
	            if(degree[pre]==0){
	                queue.offer(pre);
	                number++;
	            }
	        }
	    }
	    if(number == numCourses) return true;
	    return false;
	}
}