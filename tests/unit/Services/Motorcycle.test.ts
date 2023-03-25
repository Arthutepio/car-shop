import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa a camada "MotorcycleService"', function () {
  it('Verifica se é possível cadastrar uma moto com sucesso', async function () {
    // GIVEN - Dado...
    const input = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output = new Motorcycle({
      id: '641db86c7ccda71135ec32d1',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(output);
    // WHEN - Quando...
    const service = new MotorcycleService();
    const result = await service.create(input);

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se em caso de erro o retorno é null', async function () {
    // GIVEN - Dado...

    // WHEN - Quando...
    const service = new MotorcycleService();
    const result = service.createMotorcycleDomain(null);

    // THEN - Então...
    expect(result).to.be.deep.equal(null);
  });

  it('Verifica se é possível listar todas as motos com sucesso', async function () {
    // GIVEN - Dado...
    const output = [
      {
        id: '641f768a2e1929456730016b',
        model: 'Honda Cb',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    sinon.stub(Model, 'find').resolves(output);
    // WHEN - Quando...
    const service = new MotorcycleService();
    const result = await service.findAll();

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é possível listar uma moto por ID com sucesso', async function () {
    // GIVEN - Dado...
    const output = new Motorcycle({
      id: '641db86c7ccda71135ec32d1',
      model: 'Honda',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'findOne').resolves(output);
    // WHEN - Quando...
    const service = new MotorcycleService();
    const result = await service.findById('641de79d7ccda71135ec32d8');

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é possível atualizar dados de uma moto por ID com sucesso', async function () {
    // GIVEN - Dado...
    const input = {
      model: 'XTZ',
      year: 2010,
      color: 'Black',
      status: true,
      buyValue: 25.990,
      category: 'Street',
      engineCapacity: 600,
    };

    const output = new Motorcycle({
      id: '641db86c7ccda71135ec32d1',
      model: 'YBR',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'findOneAndUpdate').resolves(output);
    // WHEN - Quando...
    const service = new MotorcycleService();
    const result = await service.updateById('641db86c7ccda71135ec32d1', input);

    // THEN - Então...
    expect(result).to.be.deep.equal(output);
  });
  afterEach(function () {
    sinon.restore();
  });
});