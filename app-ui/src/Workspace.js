import React from "react";
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget
} from "storm-react-diagrams";


require("storm-react-diagrams/dist/style.min.css");

class Workspace extends React.Component {
  state = {
    nodes: [
      { name: "Source", color: "rgb(0, 192, 255", id: "c1" },
      { name: "Destination", color: "rgb(192,255,0)", id: "c2" }
    ],
    links: [{ start: "Node 1", end: "Node 2" }]
  };

  createNode = () => {
    var node;
  };  

  test = () => {
    const { nodes } = this.state;

    var engine = new DiagramEngine();
    engine.installDefaultFactories();

    var model = new DiagramModel();

    // const createNodes = () => {
    //   return nodes.map(({ name, color }) => {
    //     return new DefaultNodeModel(name, color);
    //   });
    // };

    
  };

  renderDiagram = () => {
   
    var engine = new DiagramEngine();
    engine.installDefaultFactories();

    
    var model = new DiagramModel();

    
    var node1 = new DefaultNodeModel("Source", "rgb(0,192,255)");
    var port1 = node1.addOutPort("c1");
    node1.setPosition(100, 100);

   
    var node2 = new DefaultNodeModel("Destination", "rgb(192,255,0)");
    var port2 = node2.addInPort("c2");
    node2.setPosition(400, 100);
    var link1 = port1.link(port2);
    model.addAll(node1, node2, link1);
    engine.setDiagramModel(model);
    return (
      <DiagramWidget
        className="canvas"
        diagramEngine={engine}
        allowLooseLinks={false}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="workspace">{this.renderDiagram()}</div>
      </div>
    );
  }
}

export default Workspace;
