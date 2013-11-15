
function Node(p, v, l, r) {
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
}

function BST(){
    
    var root = new Node();
    
    function insert(value, node){
        node = node || root;
        if(node.value === null){
            node.value = value;
            node.left  = new Node(node);
            node.right = new Node(node);
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
    
    function remove(){
        
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
        transplant: transplant
    };
}


