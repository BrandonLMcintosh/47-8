/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (this.root) {
			let total = this.root.val;

			function sum(node) {
				for (let child of node.children) {
					total += child.val;
					if (child.children.length > 0) {
						sum(child);
					}
				}
			}
			sum(this.root);
			return total;
		}
		return 0;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		function isEven(val) {
			return val % 2 === 0 ? true : false;
		}
		if (this.root) {
			let count = isEven(this.root.val) ? 1 : 0;
			function findCount(node) {
				for (let child of node.children) {
					if (isEven(child.val)) {
						count++;
					}
					if (child.children.length > 0) {
						findCount(child);
					}
				}
			}
			findCount(this.root);
			return count;
		}
		return 0;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		function isGreater(val) {
			return val > lowerBound ? true : false;
		}

		if (this.root) {
			let count = isGreater(this.root.val) ? 1 : 0;
			function findCount(node) {
				for (let child of node.children) {
					if (isGreater(child.val)) {
						count++;
					}
					if (child.children.length > 0) {
						findCount(child);
					}
				}
			}

			findCount(this.root);
			return count;
		}
		return 0;
	}
}

module.exports = { Tree, TreeNode };
