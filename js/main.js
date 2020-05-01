// TODO: SearchBox intergration needed in var listIntegration. @param courseCode for nodifyLookupMAIN
// TODO: get rid of ID:s in visulized tree
/*
	This file takes a Course Code from index.html searching functionality and builds a tree

	1.	NodifyLookupMAIN takes a course code and returns all information in a jsonObject
	2.	A tree is recursivly built with buildTree and saved in listintegration where 
		each node has information about:
			courseCode
			prerequisites
			courseURL = "https://www.kth.se/student/kurser/kurs/" + courseCode;
			parentNode
			_json_id
	3.	The tree in listIntegration is traversed row by row with BFS and gets assigned
		and unique ID for each node in the tree. That is needed for the Treant library.
	4.	nodestructure is a jsonObject used by Treant and is created and formated 
		by exportTree.
	5.	Treant uses simple_chart_config that is the "config" concatenated with the 
		"nodestructure" and visually shows the tree. 


*/
// config for tree container div
// see html
var config = {
	container: "#chart",

	node: {
		collapsable: true
	},
	connectors: {
		type: 'step'
	},
	nodeAlign: 'top',

};

// exports node tree to prereqList.js
function getRootNode() {
	return listIntegration;
}

// listIntegration has taken jsonObject and converted it into a tree of nodes
var listIntegration = nodifyLookupMAIN("ID1206").buildTree(); // SearchBox integration needed.

// assigns a unique ID to every node in the tree
listIntegration.assignIdentifiers([]);

// sets up nodes in the right format for the Treant
var nodeStructure = listIntegration.exportTree();

// combine config with tree for Treant graph generation
var simple_chart_config = [config].concat(nodeStructure);