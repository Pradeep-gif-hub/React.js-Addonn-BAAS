function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === 'style') {
      const styleObj = reactElement.props[prop];
      for (let styleName in styleObj) {
        domElement.style[styleName] = styleObj[styleName];
      }
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://github.com//pradeep-gif-hub',
    target: '_blank',
    style: {
      backgroundColor: 'red', 
      color: 'white',
      padding: '10px',
      textDecoration: 'none',
      display: 'inline-block'
    }
  },
  children: 'GIT-HUB'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
