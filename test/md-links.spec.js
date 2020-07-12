const mdLinks = require('../index');
const mock = require('./returnMock');

describe('mdLinks', () => {
  test('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('when it is not a file neither a directory', (done) => {
    mdLinks('doesNotExist')
      .catch(e => {
        expect(e).toBe('Erro: O item passado não é válido');
        done();
      });
  });
  
  test('when it is a file, should return an array with file, text and href', (done) => {
    mdLinks('./test/mock.md')
      .then(links => {
        expect(links).toEqual(mock.resultsWithoutValidate);
        done();
      });
  });

  test('when it is a file and pass the "--validate" option, should return an array with file, text, href and http/s stats', (done) => {
    mdLinks('./test/mock.md', '--validate')
      .then(links => {
        expect(links).toEqual(mock.resultsWithValidate);
        done();
      });
  });

  test('when it is a file and pass the "--status" option, should return stats', (done) => {
    mdLinks('./test/mock.md', '--stats')
      .then(links => {
        expect(links).toEqual(mock.statsReturn);
        done();
      });
  });

  test('when it is a folder, should return an array with file, text and href', (done) => {
    mdLinks('./test/')
      .then(links => {
        expect(links).toEqual(mock.resultsWithoutValidate);
        done();
      });
  });

  test('when it is a folder and pass the "--validate" option, should return an array with file, text, href and http/s stats', (done) => {
    mdLinks('./test/', '--validate')
      .then(links => {
        expect(links).toEqual(mock.resultsWithValidate);
        done();
      });
  });

  test('when it is a folder and pass the "--stats" option, should return an array with file, text, href and http/s stats', (done) => {
    mdLinks('./test/', '--stats')
      .then(links => {
        expect(links).toEqual(mock.statsReturn);
        done();
      });
  });

  test('should return an error when the folder does not contain a .md file', (done) => {
    mdLinks('./test/folderTest/')
      .catch(e => {
        expect(e).toEqual('Não existe um arquivo com extensão ".md" nesse diretório');
        done();
      });
  });

  test('should return an error when the file is not a .md', (done) => {
    mdLinks('./test/returnMock.js')
      .catch(e => {
        expect(e).toEqual('O arquivo não possui extensão ".md"');
        done();
      });
  });

  test('when the file name is longer than 50 characters, should return the formatted name', (done) => {
    mdLinks('./test/secondMock.md', '--validate')
      .then(links => {
        expect(links).toEqual(mock.fullName);
        done();
      });
  });
});