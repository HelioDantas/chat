const Sequelize = require('sequelize');

class Bank {

    /**
     * Create an instance of Bank
     *
     *
     */
    constructor() {

        this._connect();
    }

    /**
     * isConnected
     *
     *
     * @return {boolean}  retorna true se a conexao esta de pe e false se nao
     *
     */
    async isConnected() {
        try {
            await this._drive.authenticate();
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    /**
     * isConnected
     * Conectar ao banco
     *
     */
    _connect() {
        try {
            this._drive = new Sequelize(process.env.DATABASE_URL, {
                quoteIdentifirs: false,
                logging: false,
                timestamps: false
            });
        } catch (error) {
            console.log(process.env.DATABASE_URL, 'rr');
            console.error(error);
            throw "Erro ao connectar ao banco";
        }

    }

   async create(query, replacements = {}) {
        if (typeof query == 'undefined') {
            throw {message: 'variavel query indefinida', stack: 'linha 62'}
        }
        const ret = await this.isConnected();
        if (!ret) {
            throw {message: 'Banco não conectado', stack: 'linha 65'}
        }
        return await this._drive.query(query, {
            replacements: replacements,
            raw: false, type: this._drive.QueryTypes.INSERT, native: true
        });
    }

    /**
     * @param {string} query  recebe uma query
     * @param replacements
     * @return {Array} retorna uma array de objetos da consulta;
     *
     */
    async read(query, replacements = {}) {
        if (typeof query == 'undefined') {
            throw {message: 'variavel query indefinida', stack: 'linha 62'}
        }
        const ret = await this.isConnected();
        if (!ret) {
            throw {message: 'Banco não conectado', stack: 'linha 65'}
        }
        return await this._drive.query(query, {
            replacements: replacements,
            raw: false, type: this._drive.QueryTypes.SELECT, native: true
        });

    }

    delete(id) {

        return this.database.create(id);
    }

    /**
     * @param {string} query  recebe uma query
     * @return {Boolean} retorna true para ok ou false para nao;
     *
     */
    async update(query) {
        const ret = await this.isConnected();
        if (!ret) {
            throw {message: 'Banco não conectado', stack: 'linha 65'}
        }
        await this._drive.query(query, {
            raw: false, native: true
        });
        return true;


    }

}

module.exports = Bank;