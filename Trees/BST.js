
function Node(p, v, l, r) {
    var self = this;
    //log('Setting v to: ' +v);
    self.left = l || null;
    self.right = r|| null;
    self.parent = p|| null;
    self.value = v|| null;
}

function BST(){
    
    var root = new Node();
    
    function insert(toIns, node){
        node = node || root;
        if(node.value === null){
            node.value = toIns.value;
            node.left  = new Node(node);
            node.right = new Node(node);
        } else if(toIns.value > node.value){
           insert(toIns, node.right);
        } else if(toIns.value < node.value){
           insert(toIns, node.left);
        }
    }
    
    function search(toFind, node){
        node = node || root;
        if(node.value === null){
            return null;
        } else if(node.value === toFind){
            return node;
        } else if(toFind > node.value){
           search(toFind, node.right);
        } else if(toFind < node.value){
           search(toFind, node.left);
        }
    }
    
    return {
        insert: insert,
        search: search
    };
}
