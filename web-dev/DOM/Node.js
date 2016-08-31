//DOM Level におけるNodeインターフェースの定義
interface Node {
  //定数（constant）
  const unsigned short ELEMENT_NODE = 1;
  const unsigned short ATTRIBUTE_NODE = 2;
  const unsigned short TEXT_NODE = 3;
  const unsigned short CDATA_SECTIONNODE = 4;
  const unsigned short ENTITY_REFERENCE_NODE = 5;
  const unsigned short ENTITY_NODE = 6;
  const unsigned short PROCESSIONG_INSTRUCTION_NODE = 7;
  const unsigned short COMMENT_NODE = 8;
  const unsigned short DOCUMENT_NODE = 9;
  const unsigned short DOCUMENT_TYPE_NODE = 10;
  const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
  const unsigned short NOTATION_NODE = 12;

  //属性（property）
  readonly attribute DOMString nodeName;
  readonly attribute DOMString nodeValue;
  readonly attribute unsigned short nodeType;
  readonly attribute Node parentNode;
  readonly attribute NodeList childrenNodes;
  readonly attribute Node firstChild;
  readonly attribute Node lastChild;
  readonly attribute Node previousSibling;
  readonly attribute Node nextSibling;
  readonly attribute NamedNodeMap attributes;
  readonly attribute Document onwnerDocument;

  //methods
  Node insertBefore(in Node newChild, in Node refChild) raises(DOMException);
  Node replaceChild(in Node newChild, in Node refChild) raises(DOMException);
  Node removeChild(in Node oldChild);
  Node appendChild(in Node newChild);

  boolean hasChildrenNodes();
  Node cloneNode(in boolean deep);
}
