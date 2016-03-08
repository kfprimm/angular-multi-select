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

var to_internal_data_2_after = [
	{ text: 'A', value: 'a', num: 1,  $ams_order: 1,  $ams_parents_id: [],               $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 0, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'B', value: 'b', num: 2,  $ams_order: 2,  $ams_parents_id: [],               $ams_children_nodes: 0, $ams_children_leafs: 1, $ams_level: 0, abierto: true,  $ams_tree_visibility: true,  seleccionado: 1,     $ams_checked_children: 1 },
	{ text: 'C', value: 'c', num: 3,  $ams_order: 3,  $ams_parents_id: [2],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: true,  seleccionado: true,  $ams_checked_children: 0 },
	{ text: 'D', value: 'd', num: 4,  $ams_order: 4,  $ams_parents_id: [],               $ams_children_nodes: 0, $ams_children_leafs: 2, $ams_level: 0, abierto: false, $ams_tree_visibility: true,  seleccionado: 0,     $ams_checked_children: 1 },
	{ text: 'E', value: 'e', num: 5,  $ams_order: 5,  $ams_parents_id: [4],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'F', value: 'f', num: 6,  $ams_order: 6,  $ams_parents_id: [4],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: true,  $ams_checked_children: 0 },
	{ text: 'G', value: 'g', num: 7,  $ams_order: 7,  $ams_parents_id: [],               $ams_children_nodes: 1, $ams_children_leafs: 5, $ams_level: 0, abierto: false, $ams_tree_visibility: true,  seleccionado: -1,    $ams_checked_children: 0 },
	{ text: 'H', value: 'h', num: 8,  $ams_order: 8,  $ams_parents_id: [7],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'I', value: 'i', num: 9,  $ams_order: 9,  $ams_parents_id: [7],              $ams_children_nodes: 0, $ams_children_leafs: 2, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: -1,    $ams_checked_children: 0 },
	{ text: 'J', value: 'j', num: 10, $ams_order: 10, $ams_parents_id: [7, 9],           $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 2, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'K', value: 'k', num: 11, $ams_order: 11, $ams_parents_id: [7, 9],           $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 2, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'L', value: 'l', num: 12, $ams_order: 12, $ams_parents_id: [7],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'M', value: 'm', num: 13, $ams_order: 13, $ams_parents_id: [7],              $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: false, $ams_checked_children: 0 },
	{ text: 'N', value: 'n', num: 14, $ams_order: 14, $ams_parents_id: [],               $ams_children_nodes: 3, $ams_children_leafs: 5, $ams_level: 0, abierto: true,  $ams_tree_visibility: true,  seleccionado: 0,     $ams_checked_children: 1 },
	{ text: 'O', value: 'o', num: 15, $ams_order: 15, $ams_parents_id: [14],             $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'P', value: 'p', num: 16, $ams_order: 16, $ams_parents_id: [14],             $ams_children_nodes: 2, $ams_children_leafs: 3, $ams_level: 1, abierto: true,  $ams_tree_visibility: true,  seleccionado: 0,     $ams_checked_children: 1 },
	{ text: 'Q', value: 'q', num: 17, $ams_order: 17, $ams_parents_id: [14, 16],         $ams_children_nodes: 1, $ams_children_leafs: 2, $ams_level: 2, abierto: true,  $ams_tree_visibility: true,  seleccionado: 0,     $ams_checked_children: 1 },
	{ text: 'R', value: 'r', num: 18, $ams_order: 18, $ams_parents_id: [14, 16, 17],     $ams_children_nodes: 0, $ams_children_leafs: 1, $ams_level: 3, abierto: false, $ams_tree_visibility: true,  seleccionado: 1,     $ams_checked_children: 1 },
	{ text: 'S', value: 's', num: 19, $ams_order: 19, $ams_parents_id: [14, 16, 17, 18], $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 4, abierto: false, $ams_tree_visibility: false, seleccionado: true,  $ams_checked_children: 0 },
	{ text: 'T', value: 't', num: 20, $ams_order: 20, $ams_parents_id: [14, 16, 17],     $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 3, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'U', value: 'u', num: 21, $ams_order: 21, $ams_parents_id: [14, 16],         $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 2, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'V', value: 'v', num: 22, $ams_order: 22, $ams_parents_id: [14],             $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'W', value: 'w', num: 23, $ams_order: 23, $ams_parents_id: [],               $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 0, abierto: false, $ams_tree_visibility: true,  seleccionado: false, $ams_checked_children: 0 },
	{ text: 'X', value: 'x', num: 24, $ams_order: 24, $ams_parents_id: [],               $ams_children_nodes: 0, $ams_children_leafs: 2, $ams_level: 0, abierto: false, $ams_tree_visibility: true,  seleccionado: 1,     $ams_checked_children: 2 },
	{ text: 'Y', value: 'y', num: 25, $ams_order: 25, $ams_parents_id: [24],             $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: true,  $ams_checked_children: 0 },
	{ text: 'Z', value: 'z', num: 26, $ams_order: 26, $ams_parents_id: [24],             $ams_children_nodes: 0, $ams_children_leafs: 0, $ams_level: 1, abierto: false, $ams_tree_visibility: false, seleccionado: true,  $ams_checked_children: 0 }
];
