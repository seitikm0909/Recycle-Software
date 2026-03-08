const LANGUAGES = {
  pt: { label: 'Português', appTitle: 'Sistema de Reciclagem', language: 'Idioma', purchaseTab: 'Compra', saleTab: 'Venda', searchTab: 'Clientes', summaryTab: 'Resumo', settingsTab: 'Configurações', purchaseFormTitle: 'Cadastro de Compra', saleFormTitle: 'Cadastro de Venda', searchTitle: 'Busca de Clientes', searchInput: 'Buscar por nome, ID ou telefone', filterType: 'Tipo', all: 'Todos', clientId: 'ID Cliente', clientName: 'Nome do Cliente', phone: 'Telefone', address: 'Endereço', entryDate: 'Data de Entrada', transactionCode: 'Código de Transação', total: 'Total', type: 'Tipo', actions: 'Ações', summaryTitle: 'Resumo e Gráficos', totalTransactions: 'Transações', purchaseVolume: 'Volume Compra', saleVolume: 'Volume Venda', chartType: 'Tipo de gráfico', bar: 'Picos (Barras)', pie: 'Pizza', settingsTitle: 'Configurações', companyName: 'Nome da empresa', companyAddress: 'Endereço da empresa', defaultCategory: 'Categoria padrão', currency: 'Moeda', save: 'Salvar', exportExcel: 'Download Excel', category: 'Categoria', serialNumber: 'Número de série', supplier: 'Fornecedor', description: 'Descrição', vehiclePlate: 'Placa do carro', itemsTitle: 'Itens (preenchimento automático até 15 linhas)', quantity: 'Quantidade', unit: 'Unidade', unitPrice: 'Preço Unitário', manualTotal: 'Usar total manual', observation: 'Observação', printA4: 'Imprimir A4 (2 vias)', printHistory: 'Imprimir histórico Kobutsu', deviceMode: 'Modo', edit: 'Editar', update: 'Atualizar', summaryByPeriod: 'Resumo por período', periodType: 'Período', daily: 'Dia', monthly: 'Mês', yearly: 'Ano', period: 'Período', summaryByCategory: 'Resumo por categoria', summaryByDescription: 'Resumo por descrição', receipt: 'Recibo', purchaseLabel: 'Compra', saleLabel: 'Venda', noRecords: 'Sem registros', issueDate: 'Emissão', signature: 'Assinatura do Cliente', historyReport: 'Relatório histórico Kobutsu', purchasesLabel: 'Compras', salesLabel: 'Vendas' },
  es: { label: 'Español', appTitle: 'Sistema de Reciclaje', language: 'Idioma', purchaseTab: 'Compra', saleTab: 'Venta', searchTab: 'Clientes', summaryTab: 'Resumen', settingsTab: 'Configuración', purchaseFormTitle: 'Registro de Compra', saleFormTitle: 'Registro de Venta', searchTitle: 'Búsqueda de Clientes', searchInput: 'Buscar por nombre, ID o teléfono', filterType: 'Tipo', all: 'Todos', clientId: 'ID Cliente', clientName: 'Nombre del Cliente', phone: 'Teléfono', address: 'Dirección', entryDate: 'Fecha de Entrada', transactionCode: 'Código de Transacción', total: 'Total', type: 'Tipo', actions: 'Acciones', summaryTitle: 'Resumen y Gráficos', totalTransactions: 'Transacciones', purchaseVolume: 'Volumen Compra', saleVolume: 'Volumen Venta', chartType: 'Tipo de gráfico', bar: 'Picos (Barras)', pie: 'Pastel', settingsTitle: 'Configuración', companyName: 'Nombre de la empresa', companyAddress: 'Dirección de la empresa', defaultCategory: 'Categoría predeterminada', currency: 'Moneda', save: 'Guardar', exportExcel: 'Descargar Excel', category: 'Categoría', serialNumber: 'Número de serie', supplier: 'Proveedor', description: 'Descripción', vehiclePlate: 'Placa del coche', itemsTitle: 'Ítems (llenado automático hasta 15 líneas)', quantity: 'Cantidad', unit: 'Unidad', unitPrice: 'Precio Unitario', manualTotal: 'Usar total manual', observation: 'Observación', printA4: 'Imprimir A4 (2 copias)', printHistory: 'Imprimir historial Kobutsu', deviceMode: 'Modo', edit: 'Editar', update: 'Atualizar', summaryByPeriod: 'Resumo por período', periodType: 'Período', daily: 'Dia', monthly: 'Mês', yearly: 'Ano', period: 'Período', summaryByCategory: 'Resumo por categoria', summaryByDescription: 'Resumo por descrição', receipt: 'Recibo', purchaseLabel: 'Compra', saleLabel: 'Venda', noRecords: 'Sem registros', issueDate: 'Emissão', signature: 'Assinatura do Cliente', historyReport: 'Relatório histórico Kobutsu', purchasesLabel: 'Compras', salesLabel: 'Vendas' },
  en: { label: 'English', appTitle: 'Recycling System', language: 'Language', purchaseTab: 'Purchase', saleTab: 'Sale', searchTab: 'Clients', summaryTab: 'Summary', settingsTab: 'Settings', purchaseFormTitle: 'Purchase Entry', saleFormTitle: 'Sales Entry', searchTitle: 'Client Search', searchInput: 'Search by name, ID or phone', filterType: 'Type', all: 'All', clientId: 'Client ID', clientName: 'Client Name', phone: 'Phone', address: 'Address', entryDate: 'Entry Date', transactionCode: 'Transaction Code', total: 'Total', type: 'Type', actions: 'Actions', summaryTitle: 'Summary and Charts', totalTransactions: 'Transactions', purchaseVolume: 'Purchase Volume', saleVolume: 'Sales Volume', chartType: 'Chart type', bar: 'Peaks (Bar)', pie: 'Pie', settingsTitle: 'Settings', companyName: 'Company name', companyAddress: 'Company address', defaultCategory: 'Default category', currency: 'Currency', save: 'Save', exportExcel: 'Download Excel', category: 'Category', serialNumber: 'Serial Number', supplier: 'Supplier', description: 'Description', vehiclePlate: 'Vehicle Plate', itemsTitle: 'Items (auto-fill up to 15 rows)', quantity: 'Quantity', unit: 'Unit', unitPrice: 'Unit Price', manualTotal: 'Use manual total', observation: 'Observation', printA4: 'Print A4 (2 copies)', printHistory: 'Print Kobutsu history', deviceMode: 'Mode', edit: 'Edit', update: 'Update', summaryByPeriod: 'Summary by period', periodType: 'Period', daily: 'Day', monthly: 'Month', yearly: 'Year', period: 'Period', summaryByCategory: 'Summary by category', summaryByDescription: 'Summary by description', receipt: 'Receipt', purchaseLabel: 'Purchase', saleLabel: 'Sale', noRecords: 'No records', issueDate: 'Issue date', signature: 'Customer signature', historyReport: 'Kobutsu history report', purchasesLabel: 'Purchases', salesLabel: 'Sales' },
  ja: { label: '日本語', appTitle: 'リサイクル管理システム', language: '言語', purchaseTab: '購入', saleTab: '販売', searchTab: '顧客', summaryTab: '概要', settingsTab: '設定', purchaseFormTitle: '購入登録', saleFormTitle: '販売登録', searchTitle: '顧客検索', searchInput: '名前、ID、電話で検索', filterType: '種類', all: 'すべて', clientId: '顧客ID', clientName: '顧客名', phone: '電話', address: '住所', entryDate: '入力日', transactionCode: '取引コード', total: '合計', type: '種類', actions: '操作', summaryTitle: '概要とグラフ', totalTransactions: '取引数', purchaseVolume: '購入量', saleVolume: '販売量', chartType: 'グラフ種類', bar: 'ピーク（棒）', pie: '円グラフ', settingsTitle: '設定', companyName: '会社名', companyAddress: '会社住所', defaultCategory: '既定カテゴリ', currency: '通貨', save: '保存', exportExcel: 'Excelダウンロード', category: 'カテゴリ', serialNumber: 'シリアル番号', supplier: '供給業者', description: '説明', vehiclePlate: '車両ナンバー', itemsTitle: '項目（最大15行自動入力）', quantity: '数量', unit: '単位', unitPrice: '単価', manualTotal: '手動合計を使用', observation: '備考', printA4: 'A4印刷（2部）', printHistory: '古物履歴を印刷', deviceMode: 'モード', edit: '編集', update: '更新', summaryByPeriod: '期間別サマリー', periodType: '期間', daily: '日次', monthly: '月次', yearly: '年次', period: '期間', summaryByCategory: 'カテゴリ別サマリー', summaryByDescription: '説明別サマリー', receipt: '領収書', purchaseLabel: '購入', saleLabel: '販売', noRecords: 'データなし', issueDate: '発行日', signature: 'お客様署名', historyReport: '古物履歴レポート', purchasesLabel: '購入', salesLabel: '販売' },
  vi: { label: 'Tiếng Việt', appTitle: 'Hệ thống Tái chế', language: 'Ngôn ngữ', purchaseTab: 'Mua vào', saleTab: 'Bán ra', searchTab: 'Khách hàng', summaryTab: 'Tổng quan', settingsTab: 'Cài đặt', purchaseFormTitle: 'Nhập Mua', saleFormTitle: 'Nhập Bán', searchTitle: 'Tìm Khách hàng', searchInput: 'Tìm theo tên, ID hoặc điện thoại', filterType: 'Loại', all: 'Tất cả', clientId: 'ID Khách', clientName: 'Tên Khách', phone: 'Điện thoại', address: 'Địa chỉ', entryDate: 'Ngày nhập', transactionCode: 'Mã giao dịch', total: 'Tổng', type: 'Loại', actions: 'Hành động', summaryTitle: 'Tổng quan và Biểu đồ', totalTransactions: 'Giao dịch', purchaseVolume: 'Khối lượng mua', saleVolume: 'Khối lượng bán', chartType: 'Kiểu biểu đồ', bar: 'Đỉnh (Cột)', pie: 'Tròn', settingsTitle: 'Cài đặt', companyName: 'Tên công ty', companyAddress: 'Địa chỉ công ty', defaultCategory: 'Danh mục mặc định', currency: 'Tiền tệ', save: 'Lưu', exportExcel: 'Tải Excel', category: 'Danh mục', serialNumber: 'Số serial', supplier: 'Nhà cung cấp', description: 'Mô tả', vehiclePlate: 'Biển số xe', itemsTitle: 'Mục hàng (tự động đến 15 dòng)', quantity: 'Số lượng', unit: 'Đơn vị', unitPrice: 'Đơn giá', manualTotal: 'Dùng tổng thủ công', observation: 'Ghi chú', printA4: 'In A4 (2 bản)', printHistory: 'In lịch sử Kobutsu', deviceMode: 'Chế độ', edit: 'Sửa', update: 'Cập nhật', summaryByPeriod: 'Tóm tắt theo kỳ', periodType: 'Kỳ', daily: 'Ngày', monthly: 'Tháng', yearly: 'Năm', period: 'Kỳ', summaryByCategory: 'Theo danh mục', summaryByDescription: 'Theo mô tả', receipt: 'Biên nhận', purchaseLabel: 'Mua', saleLabel: 'Bán', noRecords: 'Không có dữ liệu', issueDate: 'Ngày phát hành', signature: 'Chữ ký khách hàng' },
  ur: { label: 'پاکستان (اردو)', appTitle: 'ری سائیکلنگ سسٹم', language: 'زبان', purchaseTab: 'خرید', saleTab: 'فروخت', searchTab: 'گاہک', summaryTab: 'خلاصہ', settingsTab: 'ترتیبات', purchaseFormTitle: 'خرید اندراج', saleFormTitle: 'فروخت اندراج', searchTitle: 'گاہک تلاش', searchInput: 'نام، ID یا فون سے تلاش کریں', filterType: 'قسم', all: 'سب', clientId: 'گاہک ID', clientName: 'گاہک کا نام', phone: 'فون', address: 'پتہ', entryDate: 'داخلہ تاریخ', transactionCode: 'ٹرانزیکشن کوڈ', total: 'کل', type: 'قسم', actions: 'اقدامات', summaryTitle: 'خلاصہ اور چارٹس', totalTransactions: 'ٹرانزیکشنز', purchaseVolume: 'خرید حجم', saleVolume: 'فروخت حجم', chartType: 'چارٹ قسم', bar: 'بار', pie: 'پائی', settingsTitle: 'ترتیبات', companyName: 'کمپنی نام', companyAddress: 'کمپنی پتہ', defaultCategory: 'ڈیفالٹ کیٹیگری', currency: 'کرنسی', save: 'محفوظ کریں', exportExcel: 'Excel ڈاؤن لوڈ', category: 'کیٹیگری', serialNumber: 'سیریل نمبر', supplier: 'سپلائر', description: 'تفصیل', vehiclePlate: 'گاڑی نمبر پلیٹ', itemsTitle: 'آئٹمز (15 لائن تک خودکار)', quantity: 'مقدار', unit: 'یونٹ', unitPrice: 'فی یونٹ قیمت', manualTotal: 'دستی کل استعمال کریں', observation: 'نوٹ', printA4: 'A4 پرنٹ (2 کاپیاں)', printHistory: 'Kobutsu ہسٹری پرنٹ کریں', deviceMode: 'موڈ', edit: 'ترمیم', update: 'اپ ڈیٹ', summaryByPeriod: 'مدت کے لحاظ سے خلاصہ', periodType: 'مدت', daily: 'دن', monthly: 'مہینہ', yearly: 'سال', period: 'مدت', summaryByCategory: 'زمرہ خلاصہ', summaryByDescription: 'تفصیل خلاصہ', receipt: 'رسید', purchaseLabel: 'خرید', saleLabel: 'فروخت', noRecords: 'ریکارڈ نہیں', issueDate: 'اجرا تاریخ', signature: 'کسٹمر دستخط' },
  zh: { label: '中文', appTitle: '回收管理系统', language: '语言', purchaseTab: '采购', saleTab: '销售', searchTab: '客户', summaryTab: '汇总', settingsTab: '设置', purchaseFormTitle: '采购录入', saleFormTitle: '销售录入', searchTitle: '客户查询', searchInput: '按姓名、ID或电话搜索', filterType: '类型', all: '全部', clientId: '客户ID', clientName: '客户名称', phone: '电话', address: '地址', entryDate: '录入日期', transactionCode: '交易代码', total: '总计', type: '类型', actions: '操作', summaryTitle: '汇总与图表', totalTransactions: '交易数', purchaseVolume: '采购量', saleVolume: '销售量', chartType: '图表类型', bar: '柱状', pie: '饼图', settingsTitle: '设置', companyName: '公司名称', companyAddress: '公司地址', defaultCategory: '默认分类', currency: '货币', save: '保存', exportExcel: '下载Excel', category: '分类', serialNumber: '序列号', supplier: '供应商', description: '描述', vehiclePlate: '车牌', itemsTitle: '项目（自动填充最多15行）', quantity: '数量', unit: '单位', unitPrice: '单价', manualTotal: '使用手动总计', observation: '备注', printA4: 'A4打印（两份）', printHistory: '打印Kobutsu历史', deviceMode: '模式', edit: '编辑', update: '更新', summaryByPeriod: '按周期汇总', periodType: '周期', daily: '日', monthly: '月', yearly: '年', period: '周期', summaryByCategory: '按分类汇总', summaryByDescription: '按描述汇总', receipt: '收据', purchaseLabel: '采购', saleLabel: '销售', noRecords: '无记录', issueDate: '签发日期', signature: '客户签名' },
  si: { label: 'සිංහල (Sri Lanka)', appTitle: 'ප්‍රතිචක්‍රීකරණ පද්ධතිය', language: 'භාෂාව', purchaseTab: 'මිලදී ගැනීම', saleTab: 'විකිණීම', searchTab: 'ගනුදෙනුකරුවන්', summaryTab: 'සාරාංශය', settingsTab: 'සැකසුම්', purchaseFormTitle: 'මිලදී ගැනීම ඇතුළත් කිරීම', saleFormTitle: 'විකිණීම ඇතුළත් කිරීම', searchTitle: 'ගනුදෙනුකරු සෙවීම', searchInput: 'නම, ID, දුරකථන අනුව සෙවීම', filterType: 'වර්ගය', all: 'සියල්ල', clientId: 'ගනුදෙනුකරු ID', clientName: 'ගනුදෙනුකරු නම', phone: 'දුරකථන', address: 'ලිපිනය', entryDate: 'ඇතුල්වූ දිනය', transactionCode: 'ගනුදෙනු කේතය', total: 'එකතුව', type: 'වර්ගය', actions: 'ක්‍රියා', summaryTitle: 'සාරාංශ හා චාට්', totalTransactions: 'ගනුදෙනු', purchaseVolume: 'මිලදී ගැනීම පරිමාව', saleVolume: 'විකිණීම පරිමාව', chartType: 'චාට් වර්ගය', bar: 'බාර්', pie: 'පයි', settingsTitle: 'සැකසුම්', companyName: 'සමාගම් නම', companyAddress: 'සමාගම් ලිපිනය', defaultCategory: 'පෙරනිමි කාණ්ඩය', currency: 'මුදල් ඒකකය', save: 'සුරකින්න', exportExcel: 'Excel බාගන්න', category: 'කාණ්ඩය', serialNumber: 'සීරියල් අංකය', supplier: 'සැපයුම්කරු', description: 'විස්තරය', vehiclePlate: 'වාහන අංකය', itemsTitle: 'අයිතම (පේළි 15 දක්වා ස්වයංක්‍රීය)', quantity: 'ප්‍රමාණය', unit: 'ඒකකය', unitPrice: 'ඒකක මිල', manualTotal: 'අතින් එකතුව භාවිතා කරන්න', observation: 'සටහන', printA4: 'A4 මුද්‍රණය (පිටපත් 2)', printHistory: 'Kobutsu ඉතිහාසය මුද්‍රණය', deviceMode: 'මාදිලිය', edit: 'සංස්කරණය', update: 'යාවත්කාලීන', summaryByPeriod: 'කාල සාරාංශය', periodType: 'කාලය', daily: 'දින', monthly: 'මාස', yearly: 'වසර', period: 'කාලය', summaryByCategory: 'කාණ්ඩ සාරාංශය', summaryByDescription: 'විස්තර සාරාංශය', receipt: 'රිසිට්පත', purchaseLabel: 'මිලදී ගැනීම', saleLabel: 'විකිණීම', noRecords: 'දත්ත නොමැත', issueDate: 'නිකුත් දිනය', signature: 'ගනුදෙනුකරු අත්සන' }
};

const MEMORY_FIELDS = ['category', 'supplier', 'description', 'vehiclePlate', 'serialNumber'];

function createEmptyFieldMemory() {
  const empty = {};
  MEMORY_FIELDS.forEach((field) => {
    empty[field] = [];
  });
  return { purchase: { ...empty }, sale: { ...empty } };
}

function normalizeFieldMemory(rawMemory, legacyMemories) {
  const base = createEmptyFieldMemory();
  const source = rawMemory && typeof rawMemory === 'object' ? rawMemory : {};

  ['purchase', 'sale'].forEach((type) => {
    MEMORY_FIELDS.forEach((field) => {
      const values = Array.isArray(source?.[type]?.[field]) ? source[type][field] : [];
      base[type][field] = [...new Set(values.map((v) => String(v || '').trim()).filter(Boolean))];
    });
  });

  const legacy = legacyMemories && typeof legacyMemories === 'object' ? legacyMemories : {};
  const legacyCategories = Array.isArray(legacy.categories) ? legacy.categories : [];
  const legacyDescriptions = Array.isArray(legacy.descriptions) ? legacy.descriptions : [];
  ['purchase', 'sale'].forEach((type) => {
    base[type].category = [...new Set([...base[type].category, ...legacyCategories.map((v) => String(v || '').trim()).filter(Boolean)])];
    base[type].description = [...new Set([...base[type].description, ...legacyDescriptions.map((v) => String(v || '').trim()).filter(Boolean)])];
  });
  return base;
}

const legacyMemories = JSON.parse(localStorage.getItem('recycle_memories') || '{"categories":[],"descriptions":[]}');
const state = {
  lang: 'pt',
  transactions: JSON.parse(localStorage.getItem('recycle_transactions') || '[]'),
  settings: JSON.parse(localStorage.getItem('recycle_settings') || '{}'),
  fieldMemory: normalizeFieldMemory(JSON.parse(localStorage.getItem('recycle_field_memory') || '{}'), legacyMemories),
  forms: {}
};


const LOCALE_BY_LANG = {
  pt: 'pt-BR',
  es: 'es-ES',
  en: 'en-US',
  ja: 'ja-JP',
  vi: 'vi-VN',
  ur: 'ur-PK',
  zh: 'zh-CN',
  si: 'si-LK'
};

function getCurrencyCode() {
  if (state.settings.currency) return state.settings.currency.toUpperCase();
  return state.lang === 'ja' ? 'JPY' : 'BRL';
}

function formatMoney(value) {
  const amount = Number(value || 0);
  const locale = LOCALE_BY_LANG[state.lang] || 'en-US';
  const currency = getCurrencyCode();
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  } catch (_err) {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

function applyLocaleDefaults() {
  if (!state.settings.currency) {
    state.settings.currency = state.lang === 'ja' ? 'JPY' : 'BRL';
  }
}


const I18N_PATCH = {
  pt: { noRecords: 'Sem registros', summaryByPeriod: 'Resumo por período', summaryByCategory: 'Resumo por categoria', summaryByDescription: 'Resumo por descrição', periodType: 'Período', daily: 'Dia', monthly: 'Mês', yearly: 'Ano', period: 'Período', operationalProfit: 'Lucro Operacional', invoiceRate: '% do インボイス', consumptionTaxRate: '% do 消費税', consumptionTaxMode: '消費税', taxIncluded: 'Incluso', taxSeparate: 'Calculado à parte', purchaseSaleLine: 'Volume compra/venda por período', clientIdHint: 'Digite ID existente para preencher cliente', hasInvoice: 'Possui インボイス', invoiceNumber: 'Número do インボイス', printClientHistory: 'Imprimir Kobutsu do cliente', deleteClient: 'Excluir cliente', confirmDeleteClient: 'Excluir cliente e todas as transações vinculadas?', memoryManagerTitle: 'Gerenciar memórias de preenchimento', transactionType: 'Tipo de transação', fieldLabel: 'Campo', deleteWord: 'Excluir', noMemories: 'Sem memórias para este campo', customerHistoryReport: 'Histórico Kobutsu por cliente', destination: 'Destino/Observação', printLabel: 'Imprimir', saveFullKobutsuPdf: 'Salvar PDF do histórico completo', startDate: 'Data inicial', endDate: 'Data final', allRecords: 'Todos os registros', reportPeriod: 'Período do relatório', generatedAt: 'Gerado em', fullKobutsuHistoryTitle: 'Histórico Completo Kobutsu', paymentMethod: 'Método de pagamento' },
  es: { noRecords: 'Sin registros', summaryByPeriod: 'Resumen por período', summaryByCategory: 'Resumen por categoría', summaryByDescription: 'Resumen por descripción', periodType: 'Período', daily: 'Día', monthly: 'Mes', yearly: 'Año', period: 'Período', operationalProfit: 'Beneficio Operativo', invoiceRate: '% de インボイス', consumptionTaxRate: '% de 消費税', consumptionTaxMode: '消費税', taxIncluded: 'Incluido', taxSeparate: 'Calculado por separado', purchaseSaleLine: 'Volumen compra/venta por período', clientIdHint: 'Escriba ID existente para completar cliente', hasInvoice: 'Tiene インボイス', invoiceNumber: 'Número de インボイス', printLabel: 'Imprimir', printClientHistory: 'Imprimir Kobutsu del cliente', deleteClient: 'Eliminar cliente', saveFullKobutsuPdf: 'Guardar PDF completo de Kobutsu', startDate: 'Fecha inicial', endDate: 'Fecha final', allRecords: 'Todos los registros', reportPeriod: 'Periodo del informe', generatedAt: 'Generado en', fullKobutsuHistoryTitle: 'Historial Completo Kobutsu', paymentMethod: 'Método de pago' },
  en: { noRecords: 'No records', summaryByPeriod: 'Summary by period', summaryByCategory: 'Summary by category', summaryByDescription: 'Summary by description', periodType: 'Period', daily: 'Day', monthly: 'Month', yearly: 'Year', period: 'Period', operationalProfit: 'Operating Profit', invoiceRate: 'Invoice %', consumptionTaxRate: 'Consumption tax %', consumptionTaxMode: 'Consumption tax', taxIncluded: 'Included', taxSeparate: 'Calculated separately', purchaseSaleLine: 'Purchase/Sales volume by period', clientIdHint: 'Type existing client ID to auto-fill customer data', hasInvoice: 'Has インボイス', invoiceNumber: 'インボイス number', printClientHistory: 'Print customer Kobutsu', deleteClient: 'Delete client', confirmDeleteClient: 'Delete client and all linked transactions?', memoryManagerTitle: 'Manage field memories', transactionType: 'Transaction type', fieldLabel: 'Field', deleteWord: 'Delete', noMemories: 'No memories for this field', customerHistoryReport: 'Customer Kobutsu history', destination: 'Destination/Observation', printLabel: 'Print', saveFullKobutsuPdf: 'Save full Kobutsu PDF', startDate: 'Start date', endDate: 'End date', allRecords: 'All records', reportPeriod: 'Report period', generatedAt: 'Generated at', fullKobutsuHistoryTitle: 'Full Kobutsu History', paymentMethod: 'Payment method' },
  ja: { noRecords: 'データなし', summaryByPeriod: '期間別サマリー', summaryByCategory: 'カテゴリ別サマリー', summaryByDescription: '説明別サマリー', periodType: '期間', daily: '日次', monthly: '月次', yearly: '年次', period: '期間', operationalProfit: '営業利益', invoiceRate: 'インボイス %', consumptionTaxRate: '消費税 %', consumptionTaxMode: '消費税', taxIncluded: '税込', taxSeparate: '別計算', purchaseSaleLine: '期間別の仕入/販売推移', clientIdHint: '既存の顧客IDを入力すると自動入力', hasInvoice: 'インボイスあり', invoiceNumber: 'インボイス番号', printLabel: '印刷', printClientHistory: '顧客の古物履歴を印刷', deleteClient: '顧客を削除', saveFullKobutsuPdf: '古物履歴PDFを保存', startDate: '開始日', endDate: '終了日', allRecords: '全記録', reportPeriod: 'レポート期間', generatedAt: '生成日時', fullKobutsuHistoryTitle: '古物履歴（完全版）', paymentMethod: '支払方法' },
  vi: { noRecords: 'Không có dữ liệu', summaryByPeriod: 'Tóm tắt theo kỳ', summaryByCategory: 'Theo danh mục', summaryByDescription: 'Theo mô tả', periodType: 'Kỳ', daily: 'Ngày', monthly: 'Tháng', yearly: 'Năm', period: 'Kỳ', operationalProfit: 'Lợi nhuận vận hành', invoiceRate: '% invoice', consumptionTaxRate: '% thuế tiêu dùng', consumptionTaxMode: 'Thuế tiêu dùng', taxIncluded: 'Đã gồm', taxSeparate: 'Tính riêng', purchaseSaleLine: 'Khối lượng mua/bán theo kỳ', clientIdHint: 'Nhập ID khách có sẵn để tự điền', hasInvoice: 'Có インボイス', invoiceNumber: 'Số インボイス', printLabel: 'In', printClientHistory: 'In lịch sử Kobutsu khách hàng', deleteClient: 'Xóa khách hàng', saveFullKobutsuPdf: 'Lưu PDF Kobutsu đầy đủ', startDate: 'Ngày bắt đầu', endDate: 'Ngày kết thúc', allRecords: 'Tất cả bản ghi', reportPeriod: 'Khoảng báo cáo', generatedAt: 'Tạo lúc', fullKobutsuHistoryTitle: 'Lịch sử Kobutsu đầy đủ', paymentMethod: 'Phương thức thanh toán' },
  ur: { noRecords: 'ریکارڈ نہیں', operationalProfit: 'آپریٹنگ منافع', taxIncluded: 'شامل', taxSeparate: 'الگ سے' },
  zh: { noRecords: '无记录', operationalProfit: '营业利润', taxIncluded: '含税', taxSeparate: '分开计算' },
  si: { noRecords: 'දත්ත නොමැත', operationalProfit: 'ක්‍රියාකාරී ලාභය', taxIncluded: 'ඇතුළත්', taxSeparate: 'වෙන්ව ගණනය' }
};

const PLACEHOLDER_BY_LANG = {
  pt: { search: 'Maria / A1B2C3D4 / +55...', companyName: 'Recycle Software Ltda', companyAddress: 'Rua Exemplo, 123', defaultCategory: 'Metal', currency: 'BRL', clientName: 'Maria Silva', phone: '+55 11 99999-0000', address: 'Rua Exemplo, 123', category: 'Metal', description: 'Sucata de alumínio' },
  es: { search: 'Maria / A1B2C3D4 / +34...', companyName: 'Recycle Software SL', companyAddress: 'Calle Ejemplo, 123', defaultCategory: 'Metal', currency: 'EUR', clientName: 'María López', phone: '+34 600 123 456', address: 'Calle Ejemplo, 123', category: 'Metal', description: 'Chatarra de aluminio' },
  en: { search: 'John / A1B2C3D4 / +1...', companyName: 'Recycle Software Inc', companyAddress: '123 Example St', defaultCategory: 'Metal', currency: 'USD', clientName: 'John Smith', phone: '+1 (555) 000-1111', address: '123 Example St', category: 'Metal', description: 'Aluminum scrap' },
  ja: { search: '山田 / A1B2C3D4 / 090...', companyName: 'リサイクル株式会社', companyAddress: '東京都千代田区...', defaultCategory: '金属', currency: 'JPY', clientName: '山田 太郎', phone: '090-1234-5678', address: '東京都千代田区...', category: '金属', description: 'アルミスクラップ' },
  vi: { search: 'Nguyen / A1B2C3D4 / +84...', companyName: 'Recycle Software VN', companyAddress: '123 Đường Mẫu', defaultCategory: 'Kim loại', currency: 'VND', clientName: 'Nguyen Van A', phone: '+84 90 123 4567', address: '123 Đường Mẫu', category: 'Kim loại', description: 'Phế liệu nhôm' },
  ur: { search: 'Ali / A1B2C3D4 / +92...', companyName: 'Recycle Software PK', companyAddress: 'مثال روڈ 123', defaultCategory: 'دھات', currency: 'PKR', clientName: 'Ali Khan', phone: '+92 300 1234567', address: 'مثال روڈ 123', category: 'دھات', description: 'ایلومینیم سکریپ' },
  zh: { search: '张三 / A1B2C3D4 / +86...', companyName: '回收软件有限公司', companyAddress: '示例路123号', defaultCategory: '金属', currency: 'CNY', clientName: '张三', phone: '+86 13800138000', address: '示例路123号', category: '金属', description: '铝废料' },
  si: { search: 'සිල්වා / A1B2C3D4 / +94...', companyName: 'Recycle Software LK', companyAddress: 'උදාහරණ වීදිය 123', defaultCategory: 'ලෝහ', currency: 'LKR', clientName: 'සිල්වා', phone: '+94 71 123 4567', address: 'උදාහරණ වීදිය 123', category: 'ලෝහ', description: 'ඇලුමිනියම් කැබලි' }
};

function t(key) {
  const dict = LANGUAGES[state.lang] || LANGUAGES.pt;
  const patch = I18N_PATCH[state.lang] || {};
  const ptPatch = I18N_PATCH.pt || {};
  return patch[key] || dict[key] || ptPatch[key] || LANGUAGES.pt[key] || key;
}

function applyLocalePlaceholders() {
  const ph = PLACEHOLDER_BY_LANG[state.lang] || PLACEHOLDER_BY_LANG.en;
  const search = document.querySelector('[data-locale-placeholder="search"]');
  if (search) search.placeholder = ph.search;
  const keys = ['companyName', 'companyAddress', 'defaultCategory', 'currency'];
  keys.forEach((id) => {
    const el = document.getElementById(id);
    if (el && !el.value) el.placeholder = ph[id];
  });
  Object.entries({ clientName: 'clientName', phone: 'phone', address: 'address', category: 'category', description: 'description' }).forEach(([name, key]) => {
    document.querySelectorAll(`[name="${name}"]`).forEach((el) => {
      if (!el.value) el.placeholder = ph[key] || '';
    });
  });
}

function memoryListId(type, field) {
  return `${type}-${field}-suggestions`;
}

function saveFieldMemory() {
  localStorage.setItem('recycle_field_memory', JSON.stringify(state.fieldMemory));
}

function listFieldSuggestions(type, field) {
  return state.fieldMemory?.[type]?.[field] || [];
}

function saveFieldSuggestion(type, field, value) {
  const v = String(value || '').trim();
  if (!v || !state.fieldMemory?.[type]?.[field]) return;
  if (!state.fieldMemory[type][field].includes(v)) {
    state.fieldMemory[type][field].push(v);
    saveFieldMemory();
    refreshFieldMemorySuggestions();
    renderMemoryManager();
  }
}

function removeFieldSuggestion(type, field, value) {
  const v = String(value || '').trim();
  if (!v || !state.fieldMemory?.[type]?.[field]) return;
  state.fieldMemory[type][field] = state.fieldMemory[type][field].filter((item) => item !== v);
  saveFieldMemory();
  refreshFieldMemorySuggestions();
  renderMemoryManager();
}

function refreshFieldMemorySuggestions() {
  ['purchase', 'sale'].forEach((type) => {
    MEMORY_FIELDS.forEach((field) => {
      const datalist = document.getElementById(memoryListId(type, field));
      if (!datalist) return;
      datalist.innerHTML = listFieldSuggestions(type, field)
        .map((v) => `<option value="${String(v).replaceAll('"', '&quot;')}"></option>`)
        .join('');
    });
  });
}

function rememberFieldValues(type, record) {
  MEMORY_FIELDS.forEach((field) => {
    saveFieldSuggestion(type, field, record[field]);
  });
  (record.items || []).forEach((item) => {
    saveFieldSuggestion(type, 'description', item.description);
  });
}

function bindMemoryInputs(form, type) {
  MEMORY_FIELDS.forEach((field) => {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    input.setAttribute('list', memoryListId(type, field));
    input.addEventListener('change', () => saveFieldSuggestion(type, field, input.value));
    input.addEventListener('blur', () => saveFieldSuggestion(type, field, input.value));
  });

  for (let i = 1; i <= 15; i += 1) {
    const itemDesc = form[`itemDesc${i}`];
    if (!itemDesc) continue;
    itemDesc.setAttribute('list', memoryListId(type, 'description'));
    itemDesc.addEventListener('change', () => saveFieldSuggestion(type, 'description', itemDesc.value));
    itemDesc.addEventListener('blur', () => saveFieldSuggestion(type, 'description', itemDesc.value));
  }
}

function renderMemoryManager() {
  const typeSelect = document.getElementById('memoryTypeSelect');
  const fieldSelect = document.getElementById('memoryFieldSelect');
  const list = document.getElementById('memoryList');
  if (!typeSelect || !fieldSelect || !list) return;

  const values = listFieldSuggestions(typeSelect.value, fieldSelect.value);
  if (!values.length) {
    list.innerHTML = `<li class="memory-empty">${t('noMemories')}</li>`;
    return;
  }

  list.innerHTML = values
    .map((value) => `<li class="memory-list-item"><span>${value}</span><button type="button" class="memory-remove-btn" data-memory-value="${value.replaceAll('"', '&quot;')}">${t('deleteWord')}</button></li>`)
    .join('');

  list.querySelectorAll('.memory-remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      removeFieldSuggestion(typeSelect.value, fieldSelect.value, btn.dataset.memoryValue || '');
    });
  });
}

function printClientKobutsuHistory(clientId) {
  const records = state.transactions
    .filter((row) => row.clientId === clientId)
    .slice()
    .sort((a, b) => new Date(a.entryDate || a.createdAt || 0) - new Date(b.entryDate || b.createdAt || 0));

  if (!records.length) {
    alert(t('noRecords'));
    return;
  }

  const client = records[records.length - 1];
  const rows = records.map((row, idx) => {
    const itemRows = (row.items || []).length
      ? row.items.map((item, itemIdx) => `<tr><td>${idx + 1}.${itemIdx + 1}</td><td>${row.entryDate || ''}</td><td>${row.transactionCode || ''}</td><td>${row.type}</td><td>${item.description || row.description || ''}</td><td>${item.quantity || ''}</td><td>${item.unit || row.unit || ''}</td><td>${row.supplier || ''}</td><td>${row.observation || ''}</td></tr>`).join('')
      : `<tr><td>${idx + 1}</td><td>${row.entryDate || ''}</td><td>${row.transactionCode || ''}</td><td>${row.type}</td><td>${row.description || ''}</td><td>${row.quantity || ''}</td><td>${row.unit || ''}</td><td>${row.supplier || ''}</td><td>${row.observation || ''}</td></tr>`;
    return itemRows;
  }).join('');

  document.getElementById('printArea').innerHTML = `
    <div class="a4-sheet">
      <div class="copy">
        <h3>${t('customerHistoryReport')}</h3>
        <p><strong>${t('clientId')}:</strong> ${clientId} | <strong>${t('clientName')}:</strong> ${client.clientName || ''} | <strong>${t('phone')}:</strong> ${client.phone || ''}</p>
        <p><strong>${t('issueDate')}:</strong> ${new Date().toLocaleString(LOCALE_BY_LANG[state.lang] || 'en-US')} | <strong>${t('totalTransactions')}:</strong> ${records.length}</p>
        <table>
          <thead>
            <tr><th>#</th><th>${t('entryDate')}</th><th>${t('transactionCode')}</th><th>${t('type')}</th><th>${t('description')}</th><th>${t('quantity')}</th><th>${t('unit')}</th><th>${t('supplier')}</th><th>${t('destination')}</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
  window.print();
}

function newTransactionCode(type) {

  return `${type === 'purchase' ? 'PUR' : 'SAL'}-${Date.now().toString().slice(-6)}`;
}

function resetFormForNewEntry(form, type) {
  form.reset();
  form.dataset.editingId = '';
  form.querySelector('input[name="clientId"]').value = randomId();
  form.querySelector('input[name="entryDate"]').value = new Date().toISOString().slice(0, 10);
  form.querySelector('input[name="transactionCode"]').value = newTransactionCode(type);
  form.querySelector('input[name="total"]').readOnly = true;
  form.hasInvoice?.dispatchEvent(new Event('change'));
  for (let i = 1; i <= 15; i += 1) {
    form[`itemTotal${i}`].value = '';
  }
}


function setupDeviceCompatibility() {
  const ua = navigator.userAgent || '';
  const coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const mobileUA = /Android|iPhone|iPod|IEMobile|BlackBerry|Opera Mini/i.test(ua);
  const tabletUA = /iPad|Tablet|PlayBook|Silk/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const mode = tabletUA ? 'tablet' : (mobileUA || coarsePointer ? 'mobile' : 'desktop');
  document.body.classList.toggle('is-mobile', mode === 'mobile');
  document.body.classList.toggle('is-tablet', mode === 'tablet');
  document.body.classList.toggle('is-desktop', mode === 'desktop');

  const badge = document.getElementById('deviceBadge');
  if (badge) {
    const labels = { mobile: 'iPhone/Android', tablet: 'Tablet', desktop: 'Desktop' };
    const dict = LANGUAGES[state.lang] || LANGUAGES.pt;
    badge.textContent = `${dict.deviceMode || 'Mode'}: ${labels[mode]}`;
  }

  document.querySelectorAll('input[type="tel"], input[name="phone"]').forEach((el) => {
    el.setAttribute('inputmode', 'tel');
    el.setAttribute('autocomplete', 'tel');
  });

  document.querySelectorAll('input[type="number"]').forEach((el) => {
    el.setAttribute('inputmode', 'decimal');
  });
}

function resizeChartCanvas() {
  const canvas = document.getElementById('summaryChart');
  if (!canvas) return;
  const parentWidth = Math.max(320, canvas.parentElement.clientWidth - 24);
  const ratio = window.devicePixelRatio || 1;
  canvas.style.width = `${parentWidth}px`;
  canvas.style.height = `${Math.round(parentWidth * 0.42)}px`;
  canvas.width = Math.floor(parentWidth * ratio);
  canvas.height = Math.floor(parentWidth * 0.42 * ratio);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function randomId() {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((v) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[v % 36])
    .join('');
}

function createItemsRows(tbody) {
  for (let i = 1; i <= 15; i += 1) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${i}</td><td><input name="itemDesc${i}"/></td><td><input name="itemQty${i}" type="number" step="0.01"/></td><td><input name="itemUnit${i}"/></td><td><input name="itemPrice${i}" type="number" step="0.01"/></td><td><input name="itemTotal${i}" type="number" step="0.01" readonly/></td>`;
    tbody.appendChild(row);
  }
}

function createForm(type, container) {
  const template = document.getElementById('transactionFormTemplate');
  const form = template.content.firstElementChild.cloneNode(true);
  const tbody = form.querySelector('.itemsBody');
  createItemsRows(tbody);
  bindMemoryInputs(form, type);
  form.dataset.type = type;
  const clientIdInput = form.querySelector('input[name="clientId"]');
  const entryDateInput = form.querySelector('input[name="entryDate"]');
  const transactionCodeInput = form.querySelector('input[name="transactionCode"]');
  const totalInput = form.querySelector('input[name="total"]');
  const hasInvoiceInput = form.querySelector('input[name="hasInvoice"]');
  const invoiceNumberLabel = form.querySelector('.invoice-number-field');

  const syncInvoiceField = () => {
    const enabled = !!hasInvoiceInput?.checked;
    invoiceNumberLabel?.classList.toggle('is-hidden', !enabled);
    if (!enabled && form.invoiceNumber) form.invoiceNumber.value = '';
  };

  clientIdInput.value = randomId();
  entryDateInput.value = new Date().toISOString().slice(0, 10);
  transactionCodeInput.value = newTransactionCode(type);
  form.dataset.editingId = "";
  totalInput.readOnly = true;
  clientIdInput.addEventListener('change', () => autofillByClientId(form));
  clientIdInput.addEventListener('blur', () => autofillByClientId(form));

  const recalc = () => {
    let sum = 0;
    for (let i = 1; i <= 15; i += 1) {
      const qty = Number(form[`itemQty${i}`].value || 0);
      const price = Number(form[`itemPrice${i}`].value || 0);
      const total = Number((qty * price).toFixed(2));
      form[`itemTotal${i}`].value = total || '';
      sum += total;
    }
    if (!form.manualTotalEnabled.checked) {
      totalInput.value = sum.toFixed(2);
    }
  };

  for (let i = 1; i <= 15; i += 1) {
    form[`itemQty${i}`].addEventListener('input', recalc);
    form[`itemPrice${i}`].addEventListener('input', recalc);
  }

  form.manualTotalEnabled.addEventListener('change', () => {
    totalInput.readOnly = !form.manualTotalEnabled.checked;
    if (!form.manualTotalEnabled.checked) {
      recalc();
    }
  });

  hasInvoiceInput?.addEventListener('change', syncInvoiceField);
  syncInvoiceField();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const items = [];
    for (let i = 1; i <= 15; i += 1) {
      if (form[`itemDesc${i}`].value || form[`itemQty${i}`].value) {
        items.push({
          description: form[`itemDesc${i}`].value,
          quantity: Number(form[`itemQty${i}`].value || 0),
          unit: form[`itemUnit${i}`].value,
          unitPrice: Number(form[`itemPrice${i}`].value || 0),
          lineTotal: Number(form[`itemTotal${i}`].value || 0)
        });
      }
    }
    const data = Object.fromEntries(new FormData(form).entries());
    const record = {
      ...data,
      type,
      total: Number(data.total || 0),
      unitPrice: Number(data.unitPrice || 0),
      quantity: Number(data.quantity || 0),
      hasInvoice: !!form.hasInvoice?.checked,
      invoiceNumber: form.hasInvoice?.checked ? (data.invoiceNumber || '').trim() : '',
      items,
      updatedAt: new Date().toISOString()
    };

    if (form.dataset.editingId) {
      const idx = state.transactions.findIndex((r) => r._id === form.dataset.editingId);
      if (idx >= 0) {
        state.transactions[idx] = { ...state.transactions[idx], ...record };
      }
    } else {
      record._id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      record.createdAt = new Date().toISOString();
      state.transactions.push(record);
    }

    rememberFieldValues(type, record);
    localStorage.setItem('recycle_transactions', JSON.stringify(state.transactions));
    refreshSearch();
    refreshSummary();
    alert('Registro salvo com sucesso!');
    resetFormForNewEntry(form, type);
  });

  form.querySelector('.printBtn').addEventListener('click', () => {
    generatePrintDocument(form, type);
    window.print();
  });
  state.forms[type] = form;
  container.appendChild(form);
}

function refreshSearch() {
  const text = document.getElementById('searchInput').value.toLowerCase();
  const type = document.getElementById('searchTypeFilter').value;
  const tbody = document.getElementById('searchResults');
  tbody.innerHTML = '';

  state.transactions
    .filter((r) => {
      const matchText = [r.clientName, r.clientId, r.phone].join(' ').toLowerCase().includes(text);
      const matchType = type === 'all' || r.type === type;
      return matchText && matchType;
    })
    .slice()
    .reverse()
    .forEach((r) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${r.clientId}</td><td>${r.clientName || ''}</td><td>${r.phone || ''}</td><td>${r.entryDate || ''}</td><td>${r.transactionCode || ''}</td><td>${formatMoney(r.total)}</td><td>${r.type}</td><td><button class="printRow" data-code="${r.transactionCode}">${t('printLabel')}</button> <button class="editRow">${t('edit')}</button> <button class="printClientHistoryRow">${t('printClientHistory')}</button> <button class="saveClientPdfRow">${t('saveFullKobutsuPdf')}</button> <button class="deleteClientRow">${t('deleteClient')}</button></td>`;
      tr.querySelector('.printRow').addEventListener('click', () => {
        generatePrintFromRecord(r);
        window.print();
      });
      tr.querySelector('.editRow').addEventListener('click', () => {
        loadRecordForEdit(r);
      });
      tr.querySelector('.printClientHistoryRow').addEventListener('click', () => {
        printClientKobutsuHistory(r.clientId);
      });
      tr.querySelector('.saveClientPdfRow').addEventListener('click', () => {
        saveClientFullHistoryPDF(r.clientId);
      });
      tr.querySelector('.deleteClientRow').addEventListener('click', () => {
        deleteClientById(r.clientId);
      });
      tbody.appendChild(tr);
    });
}


function getRecordDate(row) {
  return row.entryDate || String(row.createdAt || '').slice(0, 10);
}

function inDateRange(dateStr, startDate, endDate) {
  if (!dateStr) return false;
  if (startDate && dateStr < startDate) return false;
  if (endDate && dateStr > endDate) return false;
  return true;
}

function getClientRecordsByPeriod(clientId, startDate, endDate) {
  return state.transactions
    .filter((row) => row.clientId === clientId)
    .filter((row) => {
      const recordDate = getRecordDate(row);
      if (!startDate && !endDate) return true;
      return inDateRange(recordDate, startDate, endDate);
    })
    .slice()
    .sort((a, b) => new Date(getRecordDate(a) || 0) - new Date(getRecordDate(b) || 0));
}

function buildClientFullReportHTML(clientId, records, startDate, endDate) {
  const client = records[records.length - 1] || {};
  const periodLabel = (startDate || endDate)
    ? `${startDate || '...'} ~ ${endDate || '...'}`
    : t('allRecords');
  const generatedAt = new Date().toLocaleString(LOCALE_BY_LANG[state.lang] || 'en-US');
  const totalAmount = records.reduce((sum, row) => sum + Number(row.total || 0), 0);

  const txRows = records.map((row, idx) => {
    const items = (row.items || []).length
      ? row.items.map((item) => `${item.description || row.description || ''} | ${item.quantity || ''} ${item.unit || ''} | ${formatMoney(item.unitPrice || 0)} | ${formatMoney(item.lineTotal || 0)}`).join('<br/>')
      : `${row.description || ''} | ${row.quantity || ''} ${row.unit || ''} | ${formatMoney(row.unitPrice || 0)} | ${formatMoney(row.total || 0)}`;

    return `<tr>
      <td>${idx + 1}</td>
      <td>${getRecordDate(row) || ''}</td>
      <td>${row.transactionCode || ''}</td>
      <td>${row.type || ''}</td>
      <td>${formatMoney(row.total || 0)}</td>
      <td>${row.paymentMethod || '-'}</td>
      <td>${row.category || ''}<br/>${row.description || ''}</td>
      <td>${items}</td>
      <td>${row.supplier || ''}</td>
      <td>${row.observation || ''}</td>
      <td>${row.vehiclePlate || ''}<br/>${row.serialNumber || ''}</td>
    </tr>`;
  }).join('');

  return `
    <div class="a4-sheet kobutsu-report-sheet">
      <div class="copy">
        <h2>${t('fullKobutsuHistoryTitle')}</h2>
        <p><strong>${t('reportPeriod')}:</strong> ${periodLabel} | <strong>${t('generatedAt')}:</strong> ${generatedAt}</p>

        <h3>${t('clientName')}</h3>
        <p>
          <strong>${t('clientId')}:</strong> ${clientId}<br/>
          <strong>${t('clientName')}:</strong> ${client.clientName || ''}<br/>
          <strong>${t('phone')}:</strong> ${client.phone || ''}<br/>
          <strong>${t('address')}:</strong> ${client.address || ''}
        </p>

        <h3>${t('summaryTitle')}</h3>
        <p><strong>${t('totalTransactions')}:</strong> ${records.length} | <strong>${t('total')}:</strong> ${formatMoney(totalAmount)}</p>

        <h3>${t('historyReport')}</h3>
        <table>
          <thead>
            <tr>
              <th>#</th><th>${t('entryDate')}</th><th>${t('transactionCode')}</th><th>${t('type')}</th><th>${t('total')}</th><th>${t('paymentMethod')}</th><th>${t('category')}/${t('description')}</th><th>${t('itemsTitle')}</th><th>${t('supplier')}</th><th>${t('destination')}</th><th>${t('vehiclePlate')}/${t('serialNumber')}</th>
            </tr>
          </thead>
          <tbody>${txRows || `<tr><td colspan="11">${t('noRecords')}</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function saveClientFullHistoryPDF(clientId) {
  const startDate = (document.getElementById('searchStartDate')?.value || '').trim();
  const endDate = (document.getElementById('searchEndDate')?.value || '').trim();
  const records = getClientRecordsByPeriod(clientId, startDate, endDate);
  if (!records.length) {
    alert(t('noRecords'));
    return;
  }

  const reportHTML = buildClientFullReportHTML(clientId, records, startDate, endDate);
  const win = window.open('', '_blank', 'noopener,noreferrer');
  if (!win) return;
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>${t('fullKobutsuHistoryTitle')} - ${clientId}.pdf</title><style>body{font-family:Arial,sans-serif;padding:12px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #333;padding:4px;font-size:11px;vertical-align:top}h2,h3{margin:.4rem 0} @media print {.kobutsu-report-sheet{width:100%}}</style></head><body>${reportHTML}</body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 200);
}


function deleteClientById(clientId) {
  if (!clientId) return;
  const confirmed = window.confirm(t('confirmDeleteClient'));
  if (!confirmed) return;
  const before = state.transactions.length;
  state.transactions = state.transactions.filter((row) => row.clientId !== clientId);
  const removed = before - state.transactions.length;
  localStorage.setItem('recycle_transactions', JSON.stringify(state.transactions));
  refreshSearch();
  refreshSummary();
  if (removed > 0) {
    Object.entries(state.forms).forEach(([, form]) => {
      if (form?.clientId?.value === clientId) {
        resetFormForNewEntry(form, form.dataset.type || 'purchase');
      }
    });
  }
}


function autofillByClientId(form) {

  const idInput = form.querySelector('input[name="clientId"]');
  const id = (idInput?.value || '').trim();
  if (!id) return;
  const record = [...state.transactions].reverse().find((r) => r.clientId === id);
  if (!record) return;
  ['clientName', 'phone', 'address'].forEach((f) => {
    const input = form.querySelector(`[name="${f}"]`);
    if (input) input.value = record[f] || '';
  });
  if (form.hasInvoice) form.hasInvoice.checked = !!record.hasInvoice;
  if (form.invoiceNumber) form.invoiceNumber.value = record.invoiceNumber || '';
  form.hasInvoice?.dispatchEvent(new Event('change'));
}

function loadRecordForEdit(record) {
  const form = state.forms[record.type];
  if (!form) return;
  document.querySelectorAll('.tab').forEach((tEl) => tEl.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${record.type}"]`).classList.add('active');
  document.getElementById(`panel-${record.type}`).classList.add('active');

  form.dataset.editingId = record._id || '';
  Object.keys(record).forEach((k) => {
    if (form[k] && typeof record[k] !== 'object') {
      if (form[k].type === 'checkbox') {
        form[k].checked = Boolean(record[k]);
      } else {
        form[k].value = record[k] ?? '';
      }
    }
  });
  form.hasInvoice?.dispatchEvent(new Event('change'));

  for (let i = 1; i <= 15; i += 1) {
    const item = (record.items || [])[i - 1] || {};
    form[`itemDesc${i}`].value = item.description || '';
    form[`itemQty${i}`].value = item.quantity || '';
    form[`itemUnit${i}`].value = item.unit || '';
    form[`itemPrice${i}`].value = item.unitPrice || '';
    form[`itemTotal${i}`].value = item.lineTotal || '';
  }

  form.total.readOnly = !form.manualTotalEnabled.checked;
}

function refreshSummary() {
  const purchase = state.transactions.filter((t) => t.type === 'purchase');
  const sale = state.transactions.filter((t) => t.type === 'sale');
  const purchaseTotal = purchase.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const saleTotal = sale.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const invoiceRate = Number(state.settings.invoiceRate || 0);
  const taxRate = Number(state.settings.consumptionTaxRate || 0);
  const taxMode = state.settings.consumptionTaxMode || 'included';
  const invoiceAmount = saleTotal * invoiceRate / 100;
  const taxAmount = taxMode === 'included' ? (saleTotal * taxRate / (100 + Math.max(taxRate, 1e-9))) : (saleTotal * taxRate / 100);
  const operationalProfit = saleTotal - purchaseTotal - invoiceAmount - taxAmount;

  document.getElementById('metricTransactions').textContent = state.transactions.length;
  document.getElementById('metricPurchase').textContent = formatMoney(purchaseTotal);
  document.getElementById('metricSale').textContent = formatMoney(saleTotal);
  const profitEl = document.getElementById('metricProfit');
  if (profitEl) profitEl.textContent = formatMoney(operationalProfit);
  renderChart(purchaseTotal, saleTotal);
  renderAdditionalSummaries();
}


function renderAdditionalSummaries() {
  const periodType = document.getElementById('periodType')?.value || 'day';
  const group = new Map();
  const buyByPeriod = new Map();
  const saleByPeriod = new Map();
  const byCategory = new Map();
  const byDescription = new Map();

  state.transactions.forEach((tRow) => {
    const date = tRow.entryDate || (tRow.createdAt || '').slice(0, 10);
    let periodKey = date;
    if (periodType === 'month') periodKey = (date || '').slice(0, 7);
    if (periodType === 'year') periodKey = (date || '').slice(0, 4);
    const value = Number(tRow.total || 0);
    group.set(periodKey, (group.get(periodKey) || 0) + value);
    if (tRow.type === 'purchase') buyByPeriod.set(periodKey, (buyByPeriod.get(periodKey) || 0) + value);
    if (tRow.type === 'sale') saleByPeriod.set(periodKey, (saleByPeriod.get(periodKey) || 0) + value);

    const cat = tRow.category || '-';
    byCategory.set(cat, (byCategory.get(cat) || 0) + value);

    const desc = tRow.description || '-';
    byDescription.set(desc, (byDescription.get(desc) || 0) + value);
  });

  const fillBody = (id, entries) => {
    const body = document.getElementById(id);
    if (!body) return;
    body.innerHTML = entries.length
      ? entries.map(([k, v]) => `<tr><td>${k}</td><td>${formatMoney(v)}</td></tr>`).join('')
      : `<tr><td colspan="2">${t('noRecords')}</td></tr>`;
  };

  const sortDesc = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]);
  const periodEntries = [...group.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const categoryEntries = sortDesc(byCategory).slice(0, 15);
  const descriptionEntries = sortDesc(byDescription).slice(0, 15);

  fillBody('periodSummaryBody', periodEntries);
  fillBody('categorySummaryBody', categoryEntries);
  fillBody('descriptionSummaryBody', descriptionEntries);

  drawSimpleChart(document.getElementById('periodChart'), periodEntries, 'bar');
  drawSimpleChart(document.getElementById('categoryChart'), categoryEntries, document.getElementById('categoryChartType')?.value || 'bar');
  drawSimpleChart(document.getElementById('descriptionChart'), descriptionEntries, document.getElementById('descriptionChartType')?.value || 'bar');

  const lineKeys = [...new Set([...buyByPeriod.keys(), ...saleByPeriod.keys()])].sort();
  const buySeries = lineKeys.map((k) => buyByPeriod.get(k) || 0);
  const saleSeries = lineKeys.map((k) => saleByPeriod.get(k) || 0);
  drawLineChart(document.getElementById('volumeLineChart'), lineKeys, buySeries, saleSeries);
}

function drawSimpleChart(canvas, entries, mode = 'bar') {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (!entries.length) {
    ctx.fillText(t('noRecords'), 10, 20);
    return;
  }
  const colors = ['#1d7f45', '#2e6bc6', '#f39c12', '#8e44ad', '#16a085', '#c0392b'];
  if (mode === 'pie') {
    const total = entries.reduce((s, [, v]) => s + v, 0) || 1;
    let start = 0;
    entries.slice(0, 8).forEach(([, value], idx) => {
      const angle = value / total * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.35, h * 0.5);
      ctx.arc(w * 0.35, h * 0.5, Math.min(w, h) * 0.28, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = colors[idx % colors.length];
      ctx.fill();
      start += angle;
    });
  } else {
    const max = Math.max(...entries.map(([, v]) => v), 1);
    const bw = Math.max(18, (w - 60) / entries.length - 8);
    entries.slice(0, 20).forEach(([, v], idx) => {
      const x = 30 + idx * (bw + 8);
      const bh = (v / max) * (h - 60);
      ctx.fillStyle = colors[idx % colors.length];
      ctx.fillRect(x, h - 30 - bh, bw, bh);
    });
  }
}

function drawLineChart(canvas, labels, buy, sale) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (!labels.length) {
    ctx.fillText(t('noRecords'), 10, 20);
    return;
  }
  const max = Math.max(...buy, ...sale, 1);
  const drawSeries = (values, color) => {
    ctx.beginPath();
    values.forEach((v, i) => {
      const x = 40 + (i * (w - 80) / Math.max(values.length - 1, 1));
      const y = h - 30 - (v / max) * (h - 60);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  };
  drawSeries(buy, '#1d7f45');
  drawSeries(sale, '#2e6bc6');
}


function renderChart(purchaseTotal, saleTotal) {
  const canvas = document.getElementById('summaryChart');
  const ctx = canvas.getContext('2d');
  const mode = document.getElementById('chartType').value;
  const width = canvas.clientWidth || 900;
  const height = canvas.clientHeight || 380;
  ctx.clearRect(0, 0, width, height);
  const colors = ['#1d7f45', '#2e6bc6'];

  if (mode === 'bar') {
    const max = Math.max(purchaseTotal, saleTotal, 1);
    const values = [purchaseTotal, saleTotal];
    const barWidth = Math.max(60, width * 0.14);
    ['Compra', 'Venda'].forEach((name, idx) => {
      const x = width * (0.2 + idx * 0.35);
      const h = (values[idx] / max) * (height * 0.58);
      ctx.fillStyle = colors[idx];
      ctx.fillRect(x, height * 0.78 - h, barWidth, h);
      ctx.fillStyle = '#111';
      ctx.fillText(`${name}: ${formatMoney(values[idx])}`, x, height * 0.88);
    });
  } else {
    const total = purchaseTotal + saleTotal || 1;
    const cx = width * 0.38;
    const cy = height * 0.5;
    const radius = Math.min(width, height) * 0.28;
    let start = 0;
    [purchaseTotal, saleTotal].forEach((value, idx) => {
      const angle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = colors[idx];
      ctx.fill();
      start += angle;
    });
    ctx.fillStyle = '#111';
    ctx.fillText(`Compra: ${formatMoney(purchaseTotal)}`, width * 0.68, height * 0.42);
    ctx.fillText(`Venda: ${formatMoney(saleTotal)}`, width * 0.68, height * 0.52);
  }
}

function generatePrintHTML(record) {
  const itemsRows = (record.items || []).map((i, idx) => `<tr><td>${idx + 1}</td><td>${i.description || ''}</td><td>${i.quantity || ''}</td><td>${i.unit || ''}</td><td>${formatMoney(i.unitPrice)}</td><td>${formatMoney(i.lineTotal)}</td></tr>`).join('');
  const typeLabel = record.type === 'purchase' ? t('purchaseLabel') : t('saleLabel');
  const content = `<h3>${t('receipt')} - ${typeLabel}</h3>
    <p><strong>ID:</strong> ${record.clientId} | <strong>${t('transactionCode')}:</strong> ${record.transactionCode}</p>
    <p><strong>${t('clientName')}:</strong> ${record.clientName || ''} | <strong>${t('phone')}:</strong> ${record.phone || ''}</p>
    <p><strong>${t('hasInvoice')}:</strong> ${record.hasInvoice ? 'Sim/Yes' : 'Não/No'}${record.hasInvoice && record.invoiceNumber ? ` | <strong>${t('invoiceNumber')}:</strong> ${record.invoiceNumber}` : ''}</p>
    <p><strong>${t('entryDate')}:</strong> ${record.entryDate || ''} | <strong>${t('total')}:</strong> ${formatMoney(record.total)}</p>
    <p><strong>${t('category')}:</strong> ${record.category || ''} | <strong>${t('supplier')}:</strong> ${record.supplier || ''}</p>
    <p><strong>${t('description')}:</strong> ${record.description || ''}</p>
    <table><thead><tr><th>#</th><th>${t('description')}</th><th>${t('quantity')}</th><th>${t('unit')}</th><th>${t('unitPrice')}</th><th>${t('total')}</th></tr></thead><tbody>${itemsRows}</tbody></table>
    <p><strong>${t('observation')}:</strong> ${record.observation || ''}</p>
    <div class="signature">${t('signature')}</div>`;
  return `<div class="a4-sheet"><div class="copy">${content}</div><div class="copy">${content}</div></div>`;
}

function generatePrintDocument(form, type) {
  const data = Object.fromEntries(new FormData(form).entries());
  const record = { ...data, type, items: [] };
  for (let i = 1; i <= 15; i += 1) {
    if (form[`itemDesc${i}`].value || form[`itemQty${i}`].value) {
      record.items.push({
        description: form[`itemDesc${i}`].value,
        quantity: form[`itemQty${i}`].value,
        unit: form[`itemUnit${i}`].value,
        unitPrice: form[`itemPrice${i}`].value,
        lineTotal: form[`itemTotal${i}`].value
      });
    }
  }
  document.getElementById('printArea').innerHTML = generatePrintHTML(record);
}

function generatePrintFromRecord(record) {
  document.getElementById('printArea').innerHTML = generatePrintHTML(record);
}


function generateHistoryPrint() {
  const total = state.transactions.length;
  const purchases = state.transactions.filter((t) => t.type === 'purchase');
  const sales = state.transactions.filter((t) => t.type === 'sale');
  const purchaseTotal = purchases.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const saleTotal = sales.reduce((sum, item) => sum + Number(item.total || 0), 0);

  const rows = state.transactions
    .slice()
    .sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0))
    .map((r, idx) => `<tr><td>${idx + 1}</td><td>${r.entryDate || ''}</td><td>${r.type}</td><td>${r.clientId || ''}</td><td>${r.clientName || ''}</td><td>${r.transactionCode || ''}</td><td>${formatMoney(r.total)}</td><td>${r.category || ''}</td><td>${r.observation || ''}</td></tr>`)
    .join('');

  document.getElementById('printArea').innerHTML = `
    <div class="a4-sheet">
      <div class="copy">
        <h3>${t('historyReport')}</h3>
        <p><strong>${t('issueDate')}:</strong> ${new Date().toLocaleString(LOCALE_BY_LANG[state.lang] || 'en-US')} | <strong>${t('totalTransactions')}:</strong> ${total}</p>
        <p><strong>${t('purchasesLabel')}:</strong> ${purchases.length} (${formatMoney(purchaseTotal)}) | <strong>${t('salesLabel')}:</strong> ${sales.length} (${formatMoney(saleTotal)})</p>
        <table>
          <thead>
            <tr><th>#</th><th>${t('entryDate')}</th><th>${t('type')}</th><th>${t('clientId')}</th><th>${t('clientName')}</th><th>${t('transactionCode')}</th><th>${t('total')}</th><th>${t('category')}</th><th>${t('observation')}</th></tr>
          </thead>
          <tbody>${rows || `<tr><td colspan="9">${t('noRecords')}</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;

  window.print();
}

function exportExcelLikeCSV() {
  const header = ['type', 'clientId', 'clientName', 'phone', 'entryDate', 'transactionCode', 'category', 'serialNumber', 'supplier', 'description', 'quantity', 'unit', 'unitPrice', 'total', 'hasInvoice', 'invoiceNumber', 'observation'];
  const lines = [header.join(',')];
  state.transactions.forEach((t) => {
    const row = header.map((k) => `"${String(t[k] ?? '').replaceAll('"', '""')}"`).join(',');
    lines.push(row);
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'recycling_data.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

function applyTranslations() {
  applyLocaleDefaults();
  const dict = { ...(LANGUAGES[state.lang] || LANGUAGES.pt), ...(I18N_PATCH[state.lang] || {}) };
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  applyLocalePlaceholders();
  const currencyInput = document.getElementById('currency');
  if (currencyInput && !currencyInput.value) currencyInput.value = getCurrencyCode();
  setupDeviceCompatibility();
  renderMemoryManager();
}

function fillLanguageSelector() {
  const select = document.getElementById('languageSelect');
  Object.entries(LANGUAGES).forEach(([code, val]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = val.label;
    select.appendChild(option);
  });
  select.value = state.lang;
  select.addEventListener('change', () => {
    state.lang = select.value;
    applyTranslations();
    refreshSearch();
  });
}

function setupTabs() {
  document.getElementById('tabs').addEventListener('click', (e) => {
    if (!e.target.classList.contains('tab')) return;
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`panel-${e.target.dataset.tab}`).classList.add('active');
  });
}

function setupSettings() {
  applyLocaleDefaults();
  ['companyName', 'companyAddress', 'defaultCategory', 'currency', 'invoiceRate', 'consumptionTaxRate', 'consumptionTaxMode'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'consumptionTaxMode') el.value = state.settings[id] || 'included';
    else el.value = state.settings[id] || '';
  });

  document.getElementById('saveSettings').addEventListener('click', () => {
    state.settings = {
      companyName: document.getElementById('companyName').value,
      companyAddress: document.getElementById('companyAddress').value,
      defaultCategory: document.getElementById('defaultCategory').value,
      currency: document.getElementById('currency').value.toUpperCase(),
      invoiceRate: Number(document.getElementById('invoiceRate').value || 0),
      consumptionTaxRate: Number(document.getElementById('consumptionTaxRate').value || 0),
      consumptionTaxMode: document.getElementById('consumptionTaxMode').value
    };
    localStorage.setItem('recycle_settings', JSON.stringify(state.settings));
    alert('Configurações salvas!');
    refreshSearch();
    refreshSummary();
  });

  document.getElementById('exportExcel').addEventListener('click', exportExcelLikeCSV);
  document.getElementById('printHistory').addEventListener('click', generateHistoryPrint);
  document.getElementById('periodType').addEventListener('change', refreshSummary);
  document.getElementById('memoryTypeSelect')?.addEventListener('change', renderMemoryManager);
  document.getElementById('memoryFieldSelect')?.addEventListener('change', renderMemoryManager);
  renderMemoryManager();
}

function init() {
  fillLanguageSelector();
  setupDeviceCompatibility();
  applyTranslations();
  refreshFieldMemorySuggestions();
  setupTabs();
  setupSettings();
  createForm('purchase', document.getElementById('purchaseFormContainer'));
  createForm('sale', document.getElementById('saleFormContainer'));
  document.getElementById('searchInput').addEventListener('input', refreshSearch);
  document.getElementById('searchTypeFilter').addEventListener('change', refreshSearch);
  document.getElementById('chartType').addEventListener('change', refreshSummary);
  document.getElementById('categoryChartType').addEventListener('change', refreshSummary);
  document.getElementById('descriptionChartType').addEventListener('change', refreshSummary);
  window.addEventListener('resize', () => {
    resizeChartCanvas();
    refreshSummary();
  });
  window.addEventListener('orientationchange', () => {
    resizeChartCanvas();
    refreshSummary();
  });
  resizeChartCanvas();
  refreshSearch();
  refreshSummary();
}

init();
