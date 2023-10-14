const appendChild = (parentObj, childType, childClass = '') => {
  const childObj = document.createElement(childType);

  let classes =
    typeof childClass === 'string' ? childClass.split(/\s+/) : childClass;

  classes.forEach((cls) => {
    if (cls.length > 0) {
      childObj.classList.add(cls);
    }
  });

  parentObj.appendChild(childObj);
  return childObj;
};

export { appendChild };
