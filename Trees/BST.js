
function BST(){
    
    var root = new BST.Node();
    
    function insert(value, node){
        node = node || root;
        if(node.value === null){
            node.value = value;
            node.left  = new BST.Node(node);
            node.right = new BST.Node(node);
        } else if(value > node.value){
           insert(value, node.right);
        } else if(value < node.value){
           insert(value, node.left);
        }
    }
    
    function insertArr(valArr){
        for(var i=0; i<valArr.length; i++){
            insert(valArr[i]);
        }
    }
    
    function search(value, node){
        node = node || root;
        if(node.value === null){
            return null;
        } else if(node.value === value){
            return node;
        } else if(value > node.value){
           return search(value, node.right);
        } else if(value < node.value){
           return search(value, node.left);
        }
    }
    
    function min(node){
        node = node || root;
        while (node && node.left && node.left.value !== null){
            node = node.left;
        }
        return node;
    }

    function max(node){
        node = node || root;
        while (node && node.right && node.right.value !== null){
            node = node.right;
        }
        return node;
    }
    
    function successor(node){
        if(node && node.right && node.right.value !== null){
            return min(node.right);
        }
        var parent = node.parent;
        while(parent !== null && node === parent.right){
            node = parent;
            parent = parent.parent;
        }
        return parent;
    }
    
    function predecessor(node){
        if(node && node.left && node.left.value !== null){
            return max(node.left);
        }
        var parent = node.parent;
        while(parent !== null && node === parent.left){
            node = parent;
            parent = parent.parent;
        }
        return parent;
    }
    
    /**
     * Function is a bit confusing. Refactor with better names.
     */
    function transplant(u, v){
        if(u.parent === null){
            root.copy(v);
        } else if(u === u.parent.left){
            u.parent.left.copy(v);
        } else {
            u.parent.right.copy(v);
        }
        
        if(v !== null){
            v.parent.copy(u.parent);
        }
    }
    
    function remove(node){
        if(node.left.value === null){
            transplant(node, node.right);
        } else if(node.right.value === null){
            transplant(node, node.left);
        } else {
            var minNode = min(node.right);
            if(minNode.parent !== node){
                transplant(minNode, minNode.right);
                minNode.right = node.right;
                minNode.right.parent = minNode;
            }
            transplant(node, minNode);
            minNode.left.copy(node.left);
            minNode.left.parent.copy(minNode);
        }
    }
    
    function walk(order, node){
        node = node || root;
        var str = '';
        
        if(node.value !== null){
            if(order === BST.order.preorder){
                str += '(' + node.value + ')';
            }
            str += walk(order, node.left) ;
            if(order === BST.order.inorder){
                str += '(' + node.value + ')';
            }
            str += walk(order, node.right);
            if(order === BST.order.postorder){
                str += '(' + node.value + ')';
            }
        }
        return str;
    }
    
    return {
        root: root,
        insert: insert,
        insertArr: insertArr,
        search: search,
        min: min,
        max: max,
        successor: successor,
        predecessor: predecessor,
        transplant: transplant,
        remove: remove,
        walk: walk
    };
}

BST.Node = function(p, v, l, r) {
    this.left   = l || null;
    this.right  = r || null;
    this.parent = p || null;
    this.value  = v || null;
    
    this.copy = function(node){
        this.left   = node.left;  
        this.right  = node.right; 
        this.parent = node.parent;
        this.value  = node.value;
    };
};

/**
 * Enum like object to determine which order the walk is performed
 */
BST.order = Object.freeze({
        preorder: "preorder",
        inorder: "inorder",
        postorder: "postorder"
});


