const mdLinks = require('../index');
const mock = require('./returnMock');

describe('mdLinks', () => {
  test('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  
  test('when it is file, should return an array with file, text and href', (done) => {
    mdLinks('./test/mock.md')
      .then(links => {
        expect(links).toEqual(mock.resultsWithoutStatus);
        done();
      })
  })

  test('when it is file, should return an array with file, text, href and http/s stats', (done) => {
    mdLinks('./test/mock.md', '--validate')
      .then(links => {
        expect(links).toEqual(mock.resultsWithStatus);
        done();
      })
  })

  test('when it is folder, should return an array with file, text and href', (done) => {
    mdLinks('./test/')
      .then(links => {
        expect(links).toEqual(mock.resultsWithoutStatus);
        done();
      })
  })

  test('when it is folder, should return an array with file, text, href and http/s stats', (done) => {
    mdLinks('./test/', '--validate')
      .then(links => {
        expect(links).toEqual(mock.resultsWithStatus);
        done();
      })
  })

  // test('should return a string when the folder does not contain a .md file', (done) => {
  //   mdLinks('./test/folderTest/')
  //     .catch(e => {
  //       expect(e).toEqual('Não existe um arquivo com extensão .md');
  //       done();
  //     })
  // })
});
