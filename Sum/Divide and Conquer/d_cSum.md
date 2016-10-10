# Divide and Counquer

### [Search 2D Matrix](./search2DMatrixII.js)
find the subarea potential target, we have to start with a place that can make us move on.
The matrix is ordered in some way, so we should consider the 4 corner places at first. 

For Top left and bottom right corner, we should not take them into consideration, since they will not take us further,
since move in either direction have the same result. 

so we can start from top right and bottom left for further details. 
