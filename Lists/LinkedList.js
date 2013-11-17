function SLList(){
    var head = new SLList.Node();
    
    function insert(value){
        //clone head
        var next = new SLList.Node();
        next.copy(head);
        
        //Create new node that points to head
        var node = new SLList.Node(next, value);
        
        //make this node the head of the list
        head.copy(node);
    }

    function toString(node){
        node = node || head;
        var val = node.value;
        var str = '';
        if(val){
            str += '[' + val + ']';
            str += toString(node.next);
        }
        return str;
    }
    
    return {
        insert: insert,
        toString: toString
    };
}

SLList.Node = function(n, v) {
    this.next   = n || null;
    this.value  = v || null;
    
    this.copy = function(node){
        this.next   = node.next;
        this.value  = node.value;
    };
};