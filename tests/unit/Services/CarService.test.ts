import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testa a camade "Service"', function () {
  it('Verifica se é possível cadastrar um carro com sucesso', async function () {
    // GIVEN - Dado...
    const input = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const output = new Car({
      id: '641db86c7ccda71135ec32d1',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(output);
    // WHEN - Quando...
    const service = new CarService();
    const result = await service.create(input);

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se em caso de erro o retorno é null', async function () {
    // GIVEN - Dado...

    // WHEN - Quando...
    const service = new CarService();
    const result = service.createCarDomain(null);

    // THEN - Então...
    expect(result).to.be.deep.equal(null);
  });

  it('Verifica se é possível listar todos os carros com sucesso', async function () {
    // GIVEN - Dado...
    const output = [
      {
        id: '641db86c7ccda71135ec32d1',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '641de79d7ccda71135ec32d8',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(output);
    // WHEN - Quando...
    const service = new CarService();
    const result = await service.findAll();

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é possível listar um carro por ID com sucesso', async function () {
    // GIVEN - Dado...
    const output = new Car({
      id: '641db86c7ccda71135ec32d1',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findOne').resolves(output);
    // WHEN - Quando...
    const service = new CarService();
    const result = await service.findById('641de79d7ccda71135ec32d8');

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é possível atualizar dados de um carro por ID com sucesso', async function () {
    // GIVEN - Dado...
    const input = {
      model: 'Gol',
      year: 2010,
      color: 'Black',
      status: true,
      buyValue: 25.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const output = new Car({
      id: '641db86c7ccda71135ec32d1',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findOneAndUpdate').resolves(output);
    // WHEN - Quando...
    const service = new CarService();
    const result = await service.updateById('641db86c7ccda71135ec32d1', input);

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });
  afterEach(function () {
    sinon.restore();
  });
});