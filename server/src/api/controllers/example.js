export const index = (req, res) =>
  res.send('Hello World from example controller index, which is the default entry point!');

export const status = (req, res) =>
  res.send({
    result: 'Updated',
  });

export const example = (req, res) => {
  console.log('Hello World from example controller example!');
  ExampleService.aaa(req, res);
};
