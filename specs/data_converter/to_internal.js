var to_internal_data_1 = [
	{ text: 'A', value: 'a', id: 1},
	{ text: 'B', value: 'b', id: 2, open: true, children: [
		{ text: 'C', value: 'c', id: 3, checked: true}
	]},
	{ text: 'D', value: 'd', id: 4, children: [
		{ text: 'E', value: 'e', id: 5},
		{ text: 'F', value: 'f', id: 6, checked: true}
	]},
	{ text: 'G', value: 'g', id: 7, children: [
		{ text: 'H', value: 'h', id: 8},
		{ text: 'I', value: 'i', id: 9, children: [
			{ text: 'J', value: 'j', id: 10},
			{ text: 'K', value: 'k', id: 11}
		]},
		{ text: 'L', value: 'l', id: 12},
		{ text: 'M', value: 'm', id: 13}
	]},
	{ text: 'N', value: 'n', id: 14, open: true, children: [
		{ text: 'O', value: 'o', id: 15},
		{ text: 'P', value: 'p', id: 16, open: true, children: [
			{ text: 'Q', value: 'q', id: 17, open: true, children: [
				{ text: 'R', value: 'r', id: 18, children: [
					{ text: 'S', value: 's', id: 19, checked: true}
				]},
				{ text: 'T', value: 't', id: 20}
			]},
			{ text: 'U', value: 'u', id: 21}
		]},
		{ text: 'V', value: 'v', id: 22}
	]},
	{ text: 'W', value: 'w', id: 23},
	{ text: 'X', value: 'x', id: 24, children: [
		{ text: 'Y', value: 'y', id: 25, checked: true},
		{ text: 'Z', value: 'z', id: 26, checked: true}
	]}
];

var to_internal_data_2 = [
	{ text: 'A', value: 'a', num: 1},
	{ text: 'B', value: 'b', num: 2, abierto: true, hijos: [
		{ text: 'C', value: 'c', num: 3, seleccionado: true}
	]},
	{ text: 'D', value: 'd', num: 4, hijos: [
		{ text: 'E', value: 'e', num: 5},
		{ text: 'F', value: 'f', num: 6, seleccionado: true}
	]},
	{ text: 'G', value: 'g', num: 7, hijos: [
		{ text: 'H', value: 'h', num: 8},
		{ text: 'I', value: 'i', num: 9, hijos: [
			{ text: 'J', value: 'j', num: 10},
			{ text: 'K', value: 'k', num: 11}
		]},
		{ text: 'L', value: 'l', num: 12},
		{ text: 'M', value: 'm', num: 13}
	]},
	{ text: 'N', value: 'n', num: 14, abierto: true, hijos: [
		{ text: 'O', value: 'o', num: 15},
		{ text: 'P', value: 'p', num: 16, abierto: true, hijos: [
			{ text: 'Q', value: 'q', num: 17, abierto: true, hijos: [
				{ text: 'R', value: 'r', num: 18, hijos: [
					{ text: 'S', value: 's', num: 19, seleccionado: true}
				]},
				{ text: 'T', value: 't', num: 20}
			]},
			{ text: 'U', value: 'u', num: 21}
		]},
		{ text: 'V', value: 'v', num: 22}
	]},
	{ text: 'W', value: 'w', num: 23},
	{ text: 'X', value: 'x', num: 24, hijos: [
		{ text: 'Y', value: 'y', num: 25, seleccionado: true},
		{ text: 'Z', value: 'z', num: 26, seleccionado: true}
	]}
];

var to_internal_data_1_after = [
	{ text: 'A', value: 'a', id: 1,  order: 1,  parents_id: [],               children_nodes: 0, children_leafs: 0, level: 0, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'B', value: 'b', id: 2,  order: 2,  parents_id: [],               children_nodes: 0, children_leafs: 1, level: 0, open: true,  tree_visibility: true,  checked: 1,     checked_children: 1 },
	{ text: 'C', value: 'c', id: 3,  order: 3,  parents_id: [2],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: true,  checked: true,  checked_children: 0 },
	{ text: 'D', value: 'd', id: 4,  order: 4,  parents_id: [],               children_nodes: 0, children_leafs: 2, level: 0, open: false, tree_visibility: true,  checked: 0,     checked_children: 1 },
	{ text: 'E', value: 'e', id: 5,  order: 5,  parents_id: [4],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'F', value: 'f', id: 6,  order: 6,  parents_id: [4],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: true,  checked_children: 0 },
	{ text: 'G', value: 'g', id: 7,  order: 7,  parents_id: [],               children_nodes: 1, children_leafs: 5, level: 0, open: false, tree_visibility: true,  checked: -1,    checked_children: 0 },
	{ text: 'H', value: 'h', id: 8,  order: 8,  parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'I', value: 'i', id: 9,  order: 9,  parents_id: [7],              children_nodes: 0, children_leafs: 2, level: 1, open: false, tree_visibility: false, checked: -1,    checked_children: 0 },
	{ text: 'J', value: 'j', id: 10, order: 10, parents_id: [7, 9],           children_nodes: 0, children_leafs: 0, level: 2, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'K', value: 'k', id: 11, order: 11, parents_id: [7, 9],           children_nodes: 0, children_leafs: 0, level: 2, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'L', value: 'l', id: 12, order: 12, parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'M', value: 'm', id: 13, order: 13, parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: false, checked_children: 0 },
	{ text: 'N', value: 'n', id: 14, order: 14, parents_id: [],               children_nodes: 3, children_leafs: 5, level: 0, open: true,  tree_visibility: true,  checked: 0,     checked_children: 1 },
	{ text: 'O', value: 'o', id: 15, order: 15, parents_id: [14],             children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'P', value: 'p', id: 16, order: 16, parents_id: [14],             children_nodes: 2, children_leafs: 3, level: 1, open: true,  tree_visibility: true,  checked: 0,     checked_children: 1 },
	{ text: 'Q', value: 'q', id: 17, order: 17, parents_id: [14, 16],         children_nodes: 1, children_leafs: 2, level: 2, open: true,  tree_visibility: true,  checked: 0,     checked_children: 1 },
	{ text: 'R', value: 'r', id: 18, order: 18, parents_id: [14, 16, 17],     children_nodes: 0, children_leafs: 1, level: 3, open: false, tree_visibility: true,  checked: 1,     checked_children: 1 },
	{ text: 'S', value: 's', id: 19, order: 19, parents_id: [14, 16, 17, 18], children_nodes: 0, children_leafs: 0, level: 4, open: false, tree_visibility: false, checked: true,  checked_children: 0 },
	{ text: 'T', value: 't', id: 20, order: 20, parents_id: [14, 16, 17],     children_nodes: 0, children_leafs: 0, level: 3, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'U', value: 'u', id: 21, order: 21, parents_id: [14, 16],         children_nodes: 0, children_leafs: 0, level: 2, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'V', value: 'v', id: 22, order: 22, parents_id: [14],             children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'W', value: 'w', id: 23, order: 23, parents_id: [],               children_nodes: 0, children_leafs: 0, level: 0, open: false, tree_visibility: true,  checked: false, checked_children: 0 },
	{ text: 'X', value: 'x', id: 24, order: 24, parents_id: [],               children_nodes: 0, children_leafs: 2, level: 0, open: false, tree_visibility: true,  checked: 1,     checked_children: 2 },
	{ text: 'Y', value: 'y', id: 25, order: 25, parents_id: [24],             children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: true,  checked_children: 0 },
	{ text: 'Z', value: 'z', id: 26, order: 26, parents_id: [24],             children_nodes: 0, children_leafs: 0, level: 1, open: false, tree_visibility: false, checked: true,  checked_children: 0 }
];

var to_internal_data_2_after = [
	{ text: 'A', value: 'a', num: 1,  order: 1,  parents_id: [],               children_nodes: 0, children_leafs: 0, level: 0, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'B', value: 'b', num: 2,  order: 2,  parents_id: [],               children_nodes: 0, children_leafs: 1, level: 0, abierto: true,  tree_visibility: true,  seleccionado: 1,     checked_children: 1 },
	{ text: 'C', value: 'c', num: 3,  order: 3,  parents_id: [2],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: true,  seleccionado: true,  checked_children: 0 },
	{ text: 'D', value: 'd', num: 4,  order: 4,  parents_id: [],               children_nodes: 0, children_leafs: 2, level: 0, abierto: false, tree_visibility: true,  seleccionado: 0,     checked_children: 1 },
	{ text: 'E', value: 'e', num: 5,  order: 5,  parents_id: [4],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'F', value: 'f', num: 6,  order: 6,  parents_id: [4],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: true,  checked_children: 0 },
	{ text: 'G', value: 'g', num: 7,  order: 7,  parents_id: [],               children_nodes: 1, children_leafs: 5, level: 0, abierto: false, tree_visibility: true,  seleccionado: -1,    checked_children: 0 },
	{ text: 'H', value: 'h', num: 8,  order: 8,  parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'I', value: 'i', num: 9,  order: 9,  parents_id: [7],              children_nodes: 0, children_leafs: 2, level: 1, abierto: false, tree_visibility: false, seleccionado: -1,    checked_children: 0 },
	{ text: 'J', value: 'j', num: 10, order: 10, parents_id: [7, 9],           children_nodes: 0, children_leafs: 0, level: 2, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'K', value: 'k', num: 11, order: 11, parents_id: [7, 9],           children_nodes: 0, children_leafs: 0, level: 2, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'L', value: 'l', num: 12, order: 12, parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'M', value: 'm', num: 13, order: 13, parents_id: [7],              children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: false, checked_children: 0 },
	{ text: 'N', value: 'n', num: 14, order: 14, parents_id: [],               children_nodes: 3, children_leafs: 5, level: 0, abierto: true,  tree_visibility: true,  seleccionado: 0,     checked_children: 1 },
	{ text: 'O', value: 'o', num: 15, order: 15, parents_id: [14],             children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'P', value: 'p', num: 16, order: 16, parents_id: [14],             children_nodes: 2, children_leafs: 3, level: 1, abierto: true,  tree_visibility: true,  seleccionado: 0,     checked_children: 1 },
	{ text: 'Q', value: 'q', num: 17, order: 17, parents_id: [14, 16],         children_nodes: 1, children_leafs: 2, level: 2, abierto: true,  tree_visibility: true,  seleccionado: 0,     checked_children: 1 },
	{ text: 'R', value: 'r', num: 18, order: 18, parents_id: [14, 16, 17],     children_nodes: 0, children_leafs: 1, level: 3, abierto: false, tree_visibility: true,  seleccionado: 1,     checked_children: 1 },
	{ text: 'S', value: 's', num: 19, order: 19, parents_id: [14, 16, 17, 18], children_nodes: 0, children_leafs: 0, level: 4, abierto: false, tree_visibility: false, seleccionado: true,  checked_children: 0 },
	{ text: 'T', value: 't', num: 20, order: 20, parents_id: [14, 16, 17],     children_nodes: 0, children_leafs: 0, level: 3, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'U', value: 'u', num: 21, order: 21, parents_id: [14, 16],         children_nodes: 0, children_leafs: 0, level: 2, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'V', value: 'v', num: 22, order: 22, parents_id: [14],             children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'W', value: 'w', num: 23, order: 23, parents_id: [],               children_nodes: 0, children_leafs: 0, level: 0, abierto: false, tree_visibility: true,  seleccionado: false, checked_children: 0 },
	{ text: 'X', value: 'x', num: 24, order: 24, parents_id: [],               children_nodes: 0, children_leafs: 2, level: 0, abierto: false, tree_visibility: true,  seleccionado: 1,     checked_children: 2 },
	{ text: 'Y', value: 'y', num: 25, order: 25, parents_id: [24],             children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: true,  checked_children: 0 },
	{ text: 'Z', value: 'z', num: 26, order: 26, parents_id: [24],             children_nodes: 0, children_leafs: 0, level: 1, abierto: false, tree_visibility: false, seleccionado: true,  checked_children: 0 }
];
