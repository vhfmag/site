module.exports = {
	formatDate: date => new Intl.DateTimeFormat(["pt-BR", "pt"]).format(date),
};
