function SLList(initHead){
    var head = new SLList.Node(initHead);
    
    function insert(value){
        //clone head
        var next = new SLList.Node();
        next.copy(head);
        
        //Create new node that points to head
        var node = new SLList.Node(next, value);
        
        //make this node the head of the list
        head.copy(node);
    }
    
    function insertMany(valArr){
        for(var i=0; i<valArr.length; i++){
            insert(valArr[i]);
        }
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
    
    function reverseNodes(node){
        var next = node.next;
        if(next === null || next.value === null){
            head.copy(node);
            return head;
        }
        
        node.next = new SLList.Node();
        
        var prevNode = reverseNodes(next);
        
        prevNode.next = node;
        
        return node;
    }
    
    /**
     * Not an ideal solution. Some hacky code to avoid overwriting the head
     * parameter. 
     */
    function reverse(){
        var newHead = new SLList.Node();
        newHead.copy(head);
        reverseNodes(newHead);
        return this;
    }
    
    return {
        head: head,
        insert: insert,
        insertMany: insertMany,
        toString: toString,
        reverse: reverse
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