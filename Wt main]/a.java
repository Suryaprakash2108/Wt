import java.util.*;
class Node
{
    int data;
    Node left;
    Node right;
    Node( int d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree
{
    Node root;
    public void trav(Node node)
    {
        Queue <Node> q = new LinkedList<>();
        if(node == null)
        {
            return;
        }
        q.add(node);
        while(!q.isEmpty())
        {
            int l = q.size();
            int a[] =new int[l];
            for(int i = 0;i<l;i++)
            {
                Node x = q.poll();
                a[i] = x.data;
                if (x.left!=null)
                {
                    q.add(x.left);
                }
                if(x.right!=null)
                {
                    q.add(x.right);
                }
            }
            for(int z:a){
                System.out.print(z+" -> ");
            }
        }
    }
}
public class LevelOrderTrav
{
    public static void main(String[] args)
    {
        BinaryTree t = new BinaryTree();
        t.root = new Node(0);
        t.root.left = new Node(1);
        t.root.right = new Node(2);
        t.root.right.left = new Node(3);
        t.root.right.right = new Node(4);
        t.root.right.right.left = new Node(5);
        t.root.right.right.right = new Node(6);
        t.trav(t.root);
    }
}