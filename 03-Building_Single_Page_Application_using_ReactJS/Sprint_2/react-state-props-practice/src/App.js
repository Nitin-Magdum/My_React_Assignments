import "./App.css";
import Header from "./header";
import Summary from "./summary";
import Experiance from "./experiance";
import Contact from "./contact";

function App() {
  return (
    <div>
      <Header />
      <Summary
        title="Summary"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat  augue tempus porttitor tempus. Nunc quis vestibulum lacus, in hendreritmi. Integer egestas, erat ac varius facilisis, sapien orci commodomassa, id ornare nunc nisl vitae velit. Proin aliquet semper nibh euimperdiet."
      />
      <Experiance
        title="Experiance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat  augue tempus porttitor tempus. Nunc quis vestibulum lacus, in hendreritmi. Integer egestas, erat ac varius facilisis, sapien orci commodomassa, id ornare nunc nisl vitae velit. Proin aliquet semper nibh euimperdiet."
      />
      <Contact
        title="Contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat  augue tempus porttitor tempus. Nunc quis vestibulum lacus, in hendreritmi. Integer egestas, erat ac varius facilisis, sapien orci commodomassa, id ornare nunc nisl vitae velit. Proin aliquet semper nibh euimperdiet."
      />
    </div>
  );
}

export default App;
