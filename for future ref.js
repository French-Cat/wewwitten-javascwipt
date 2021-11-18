const a = {
  b: {
    c: {
      d: () => true
    }
  }
};

a.b.c.d();

const a = {
  b: (parm) => console.log(parm)
};

a.b("parm");
