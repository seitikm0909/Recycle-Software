const LANGUAGES = {
  pt: { label: 'Português', appTitle: 'Sistema de Reciclagem', language: 'Idioma', purchaseTab: 'Compra', saleTab: 'Venda', searchTab: 'Clientes', summaryTab: 'Resumo', settingsTab: 'Configurações', purchaseFormTitle: 'Cadastro de Compra', saleFormTitle: 'Cadastro de Venda', searchTitle: 'Busca de Clientes', searchInput: 'Buscar por nome, ID ou telefone', filterType: 'Tipo', all: 'Todos', clientId: 'ID Cliente', clientName: 'Nome do Cliente', phone: 'Telefone', entryDate: 'Data de Entrada', transactionCode: 'Código de Transação', total: 'Total', type: 'Tipo', actions: 'Ações', summaryTitle: 'Resumo e Gráficos', totalTransactions: 'Transações', purchaseVolume: 'Volume Compra', saleVolume: 'Volume Venda', chartType: 'Tipo de gráfico', bar: 'Picos (Barras)', pie: 'Pizza', settingsTitle: 'Configurações', companyName: 'Nome da empresa', companyAddress: 'Endereço da empresa', defaultCategory: 'Categoria padrão', currency: 'Moeda', save: 'Salvar', exportExcel: 'Download Excel', category: 'Categoria', serialNumber: 'Número de série', supplier: 'Fornecedor', description: 'Descrição', vehiclePlate: 'Placa do carro', itemsTitle: 'Itens (preenchimento automático até 15 linhas)', quantity: 'Quantidade', unit: 'Unidade', unitPrice: 'Preço Unitário', manualTotal: 'Usar total manual', observation: 'Observação', printA4: 'Imprimir A4 (2 vias)', printHistory: 'Imprimir histórico Kobutsu', deviceMode: 'Modo' },
  es: { label: 'Español', appTitle: 'Sistema de Reciclaje', language: 'Idioma', purchaseTab: 'Compra', saleTab: 'Venta', searchTab: 'Clientes', summaryTab: 'Resumen', settingsTab: 'Configuración', purchaseFormTitle: 'Registro de Compra', saleFormTitle: 'Registro de Venta', searchTitle: 'Búsqueda de Clientes', searchInput: 'Buscar por nombre, ID o teléfono', filterType: 'Tipo', all: 'Todos', clientId: 'ID Cliente', clientName: 'Nombre del Cliente', phone: 'Teléfono', entryDate: 'Fecha de Entrada', transactionCode: 'Código de Transacción', total: 'Total', type: 'Tipo', actions: 'Acciones', summaryTitle: 'Resumen y Gráficos', totalTransactions: 'Transacciones', purchaseVolume: 'Volumen Compra', saleVolume: 'Volumen Venta', chartType: 'Tipo de gráfico', bar: 'Picos (Barras)', pie: 'Pastel', settingsTitle: 'Configuración', companyName: 'Nombre de la empresa', companyAddress: 'Dirección de la empresa', defaultCategory: 'Categoría predeterminada', currency: 'Moneda', save: 'Guardar', exportExcel: 'Descargar Excel', category: 'Categoría', serialNumber: 'Número de serie', supplier: 'Proveedor', description: 'Descripción', vehiclePlate: 'Placa del coche', itemsTitle: 'Ítems (llenado automático hasta 15 líneas)', quantity: 'Cantidad', unit: 'Unidad', unitPrice: 'Precio Unitario', manualTotal: 'Usar total manual', observation: 'Observación', printA4: 'Imprimir A4 (2 copias)', printHistory: 'Imprimir historial Kobutsu', deviceMode: 'Modo' },
  en: { label: 'English', appTitle: 'Recycling System', language: 'Language', purchaseTab: 'Purchase', saleTab: 'Sale', searchTab: 'Clients', summaryTab: 'Summary', settingsTab: 'Settings', purchaseFormTitle: 'Purchase Entry', saleFormTitle: 'Sales Entry', searchTitle: 'Client Search', searchInput: 'Search by name, ID or phone', filterType: 'Type', all: 'All', clientId: 'Client ID', clientName: 'Client Name', phone: 'Phone', entryDate: 'Entry Date', transactionCode: 'Transaction Code', total: 'Total', type: 'Type', actions: 'Actions', summaryTitle: 'Summary and Charts', totalTransactions: 'Transactions', purchaseVolume: 'Purchase Volume', saleVolume: 'Sales Volume', chartType: 'Chart type', bar: 'Peaks (Bar)', pie: 'Pie', settingsTitle: 'Settings', companyName: 'Company name', companyAddress: 'Company address', defaultCategory: 'Default category', currency: 'Currency', save: 'Save', exportExcel: 'Download Excel', category: 'Category', serialNumber: 'Serial Number', supplier: 'Supplier', description: 'Description', vehiclePlate: 'Vehicle Plate', itemsTitle: 'Items (auto-fill up to 15 rows)', quantity: 'Quantity', unit: 'Unit', unitPrice: 'Unit Price', manualTotal: 'Use manual total', observation: 'Observation', printA4: 'Print A4 (2 copies)', printHistory: 'Print Kobutsu history', deviceMode: 'Mode' },
  ja: { label: '日本語', appTitle: 'リサイクル管理システム', language: '言語', purchaseTab: '購入', saleTab: '販売', searchTab: '顧客', summaryTab: '概要', settingsTab: '設定', purchaseFormTitle: '購入登録', saleFormTitle: '販売登録', searchTitle: '顧客検索', searchInput: '名前、ID、電話で検索', filterType: '種類', all: 'すべて', clientId: '顧客ID', clientName: '顧客名', phone: '電話', entryDate: '入力日', transactionCode: '取引コード', total: '合計', type: '種類', actions: '操作', summaryTitle: '概要とグラフ', totalTransactions: '取引数', purchaseVolume: '購入量', saleVolume: '販売量', chartType: 'グラフ種類', bar: 'ピーク（棒）', pie: '円グラフ', settingsTitle: '設定', companyName: '会社名', companyAddress: '会社住所', defaultCategory: '既定カテゴリ', currency: '通貨', save: '保存', exportExcel: 'Excelダウンロード', category: 'カテゴリ', serialNumber: 'シリアル番号', supplier: '供給業者', description: '説明', vehiclePlate: '車両ナンバー', itemsTitle: '項目（最大15行自動入力）', quantity: '数量', unit: '単位', unitPrice: '単価', manualTotal: '手動合計を使用', observation: '備考', printA4: 'A4印刷（2部）', printHistory: '古物履歴を印刷', deviceMode: 'モード' },
  vi: { label: 'Tiếng Việt', appTitle: 'Hệ thống Tái chế', language: 'Ngôn ngữ', purchaseTab: 'Mua vào', saleTab: 'Bán ra', searchTab: 'Khách hàng', summaryTab: 'Tổng quan', settingsTab: 'Cài đặt', purchaseFormTitle: 'Nhập Mua', saleFormTitle: 'Nhập Bán', searchTitle: 'Tìm Khách hàng', searchInput: 'Tìm theo tên, ID hoặc điện thoại', filterType: 'Loại', all: 'Tất cả', clientId: 'ID Khách', clientName: 'Tên Khách', phone: 'Điện thoại', entryDate: 'Ngày nhập', transactionCode: 'Mã giao dịch', total: 'Tổng', type: 'Loại', actions: 'Hành động', summaryTitle: 'Tổng quan và Biểu đồ', totalTransactions: 'Giao dịch', purchaseVolume: 'Khối lượng mua', saleVolume: 'Khối lượng bán', chartType: 'Kiểu biểu đồ', bar: 'Đỉnh (Cột)', pie: 'Tròn', settingsTitle: 'Cài đặt', companyName: 'Tên công ty', companyAddress: 'Địa chỉ công ty', defaultCategory: 'Danh mục mặc định', currency: 'Tiền tệ', save: 'Lưu', exportExcel: 'Tải Excel', category: 'Danh mục', serialNumber: 'Số serial', supplier: 'Nhà cung cấp', description: 'Mô tả', vehiclePlate: 'Biển số xe', itemsTitle: 'Mục hàng (tự động đến 15 dòng)', quantity: 'Số lượng', unit: 'Đơn vị', unitPrice: 'Đơn giá', manualTotal: 'Dùng tổng thủ công', observation: 'Ghi chú', printA4: 'In A4 (2 bản)', printHistory: 'In lịch sử Kobutsu', deviceMode: 'Chế độ' },
  ur: { label: 'پاکستان (اردو)', appTitle: 'ری سائیکلنگ سسٹم', language: 'زبان', purchaseTab: 'خرید', saleTab: 'فروخت', searchTab: 'گاہک', summaryTab: 'خلاصہ', settingsTab: 'ترتیبات', purchaseFormTitle: 'خرید اندراج', saleFormTitle: 'فروخت اندراج', searchTitle: 'گاہک تلاش', searchInput: 'نام، ID یا فون سے تلاش کریں', filterType: 'قسم', all: 'سب', clientId: 'گاہک ID', clientName: 'گاہک کا نام', phone: 'فون', entryDate: 'داخلہ تاریخ', transactionCode: 'ٹرانزیکشن کوڈ', total: 'کل', type: 'قسم', actions: 'اقدامات', summaryTitle: 'خلاصہ اور چارٹس', totalTransactions: 'ٹرانزیکشنز', purchaseVolume: 'خرید حجم', saleVolume: 'فروخت حجم', chartType: 'چارٹ قسم', bar: 'بار', pie: 'پائی', settingsTitle: 'ترتیبات', companyName: 'کمپنی نام', companyAddress: 'کمپنی پتہ', defaultCategory: 'ڈیفالٹ کیٹیگری', currency: 'کرنسی', save: 'محفوظ کریں', exportExcel: 'Excel ڈاؤن لوڈ', category: 'کیٹیگری', serialNumber: 'سیریل نمبر', supplier: 'سپلائر', description: 'تفصیل', vehiclePlate: 'گاڑی نمبر پلیٹ', itemsTitle: 'آئٹمز (15 لائن تک خودکار)', quantity: 'مقدار', unit: 'یونٹ', unitPrice: 'فی یونٹ قیمت', manualTotal: 'دستی کل استعمال کریں', observation: 'نوٹ', printA4: 'A4 پرنٹ (2 کاپیاں)', printHistory: 'Kobutsu ہسٹری پرنٹ کریں', deviceMode: 'موڈ' },
  zh: { label: '中文', appTitle: '回收管理系统', language: '语言', purchaseTab: '采购', saleTab: '销售', searchTab: '客户', summaryTab: '汇总', settingsTab: '设置', purchaseFormTitle: '采购录入', saleFormTitle: '销售录入', searchTitle: '客户查询', searchInput: '按姓名、ID或电话搜索', filterType: '类型', all: '全部', clientId: '客户ID', clientName: '客户名称', phone: '电话', entryDate: '录入日期', transactionCode: '交易代码', total: '总计', type: '类型', actions: '操作', summaryTitle: '汇总与图表', totalTransactions: '交易数', purchaseVolume: '采购量', saleVolume: '销售量', chartType: '图表类型', bar: '柱状', pie: '饼图', settingsTitle: '设置', companyName: '公司名称', companyAddress: '公司地址', defaultCategory: '默认分类', currency: '货币', save: '保存', exportExcel: '下载Excel', category: '分类', serialNumber: '序列号', supplier: '供应商', description: '描述', vehiclePlate: '车牌', itemsTitle: '项目（自动填充最多15行）', quantity: '数量', unit: '单位', unitPrice: '单价', manualTotal: '使用手动总计', observation: '备注', printA4: 'A4打印（两份）', printHistory: '打印Kobutsu历史', deviceMode: '模式' },
  si: { label: 'සිංහල (Sri Lanka)', appTitle: 'ප්‍රතිචක්‍රීකරණ පද්ධතිය', language: 'භාෂාව', purchaseTab: 'මිලදී ගැනීම', saleTab: 'විකිණීම', searchTab: 'ගනුදෙනුකරුවන්', summaryTab: 'සාරාංශය', settingsTab: 'සැකසුම්', purchaseFormTitle: 'මිලදී ගැනීම ඇතුළත් කිරීම', saleFormTitle: 'විකිණීම ඇතුළත් කිරීම', searchTitle: 'ගනුදෙනුකරු සෙවීම', searchInput: 'නම, ID, දුරකථන අනුව සෙවීම', filterType: 'වර්ගය', all: 'සියල්ල', clientId: 'ගනුදෙනුකරු ID', clientName: 'ගනුදෙනුකරු නම', phone: 'දුරකථන', entryDate: 'ඇතුල්වූ දිනය', transactionCode: 'ගනුදෙනු කේතය', total: 'එකතුව', type: 'වර්ගය', actions: 'ක්‍රියා', summaryTitle: 'සාරාංශ හා චාට්', totalTransactions: 'ගනුදෙනු', purchaseVolume: 'මිලදී ගැනීම පරිමාව', saleVolume: 'විකිණීම පරිමාව', chartType: 'චාට් වර්ගය', bar: 'බාර්', pie: 'පයි', settingsTitle: 'සැකසුම්', companyName: 'සමාගම් නම', companyAddress: 'සමාගම් ලිපිනය', defaultCategory: 'පෙරනිමි කාණ්ඩය', currency: 'මුදල් ඒකකය', save: 'සුරකින්න', exportExcel: 'Excel බාගන්න', category: 'කාණ්ඩය', serialNumber: 'සීරියල් අංකය', supplier: 'සැපයුම්කරු', description: 'විස්තරය', vehiclePlate: 'වාහන අංකය', itemsTitle: 'අයිතම (පේළි 15 දක්වා ස්වයංක්‍රීය)', quantity: 'ප්‍රමාණය', unit: 'ඒකකය', unitPrice: 'ඒකක මිල', manualTotal: 'අතින් එකතුව භාවිතා කරන්න', observation: 'සටහන', printA4: 'A4 මුද්‍රණය (පිටපත් 2)', printHistory: 'Kobutsu ඉතිහාසය මුද්‍රණය', deviceMode: 'මාදිලිය' }
};

const state = {
  lang: 'pt',
  transactions: JSON.parse(localStorage.getItem('recycle_transactions') || '[]'),
  settings: JSON.parse(localStorage.getItem('recycle_settings') || '{}')
};


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
  form.dataset.type = type;
  form.clientId.value = randomId();
  form.entryDate.value = new Date().toISOString().slice(0, 10);
  form.transactionCode.value = `${type === 'purchase' ? 'PUR' : 'SAL'}-${Date.now().toString().slice(-6)}`;
  form.total.readOnly = true;

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
      form.total.value = sum.toFixed(2);
    }
  };

  for (let i = 1; i <= 15; i += 1) {
    form[`itemQty${i}`].addEventListener('input', recalc);
    form[`itemPrice${i}`].addEventListener('input', recalc);
  }

  form.manualTotalEnabled.addEventListener('change', () => {
    form.total.readOnly = !form.manualTotalEnabled.checked;
    if (!form.manualTotalEnabled.checked) {
      recalc();
    }
  });

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
      items,
      createdAt: new Date().toISOString()
    };
    state.transactions.push(record);
    localStorage.setItem('recycle_transactions', JSON.stringify(state.transactions));
    refreshSearch();
    refreshSummary();
    alert('Registro salvo com sucesso!');
    form.clientId.value = randomId();
  });

  form.querySelector('.printBtn').addEventListener('click', () => {
    generatePrintDocument(form, type);
    window.print();
  });

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
      tr.innerHTML = `<td>${r.clientId}</td><td>${r.clientName || ''}</td><td>${r.phone || ''}</td><td>${r.entryDate || ''}</td><td>${r.transactionCode || ''}</td><td>${r.total?.toFixed?.(2) || r.total}</td><td>${r.type}</td><td><button data-code="${r.transactionCode}">Print</button></td>`;
      tr.querySelector('button').addEventListener('click', () => {
        generatePrintFromRecord(r);
        window.print();
      });
      tbody.appendChild(tr);
    });
}

function refreshSummary() {
  const purchase = state.transactions.filter((t) => t.type === 'purchase');
  const sale = state.transactions.filter((t) => t.type === 'sale');
  const purchaseTotal = purchase.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const saleTotal = sale.reduce((sum, item) => sum + Number(item.total || 0), 0);

  document.getElementById('metricTransactions').textContent = state.transactions.length;
  document.getElementById('metricPurchase').textContent = purchaseTotal.toFixed(2);
  document.getElementById('metricSale').textContent = saleTotal.toFixed(2);
  renderChart(purchaseTotal, saleTotal);
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
      ctx.fillText(`${name}: ${values[idx].toFixed(2)}`, x, height * 0.88);
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
    ctx.fillText(`Compra: ${purchaseTotal.toFixed(2)}`, width * 0.68, height * 0.42);
    ctx.fillText(`Venda: ${saleTotal.toFixed(2)}`, width * 0.68, height * 0.52);
  }
}

function generatePrintHTML(record) {
  const itemsRows = (record.items || []).map((i, idx) => `<tr><td>${idx + 1}</td><td>${i.description || ''}</td><td>${i.quantity || ''}</td><td>${i.unit || ''}</td><td>${i.unitPrice || ''}</td><td>${i.lineTotal || ''}</td></tr>`).join('');
  const content = `<h3>Comprovante - ${record.type}</h3>
    <p><strong>ID:</strong> ${record.clientId} | <strong>Transação:</strong> ${record.transactionCode}</p>
    <p><strong>Cliente:</strong> ${record.clientName || ''} | <strong>Telefone:</strong> ${record.phone || ''}</p>
    <p><strong>Data:</strong> ${record.entryDate || ''} | <strong>Total:</strong> ${record.total}</p>
    <p><strong>Categoria:</strong> ${record.category || ''} | <strong>Fornecedor:</strong> ${record.supplier || ''}</p>
    <p><strong>Descrição:</strong> ${record.description || ''}</p>
    <table><thead><tr><th>#</th><th>Descrição</th><th>Qtd</th><th>Unid.</th><th>Preço</th><th>Total</th></tr></thead><tbody>${itemsRows}</tbody></table>
    <p><strong>Observação:</strong> ${record.observation || ''}</p>
    <div class="signature">Assinatura do Cliente</div>`;
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
    .map((r, idx) => `<tr><td>${idx + 1}</td><td>${r.entryDate || ''}</td><td>${r.type}</td><td>${r.clientId || ''}</td><td>${r.clientName || ''}</td><td>${r.transactionCode || ''}</td><td>${Number(r.total || 0).toFixed(2)}</td><td>${r.category || ''}</td><td>${r.observation || ''}</td></tr>`)
    .join('');

  document.getElementById('printArea').innerHTML = `
    <div class="a4-sheet">
      <div class="copy">
        <h3>Relatório histórico Kobutsu</h3>
        <p><strong>Emissão:</strong> ${new Date().toLocaleString()} | <strong>Total de registros:</strong> ${total}</p>
        <p><strong>Compras:</strong> ${purchases.length} (${purchaseTotal.toFixed(2)}) | <strong>Vendas:</strong> ${sales.length} (${saleTotal.toFixed(2)})</p>
        <table>
          <thead>
            <tr><th>#</th><th>Data</th><th>Tipo</th><th>ID Cliente</th><th>Cliente</th><th>Transação</th><th>Total</th><th>Categoria</th><th>Observação</th></tr>
          </thead>
          <tbody>${rows || '<tr><td colspan="9">Sem registros</td></tr>'}</tbody>
        </table>
      </div>
    </div>`;

  window.print();
}

function exportExcelLikeCSV() {
  const header = ['type', 'clientId', 'clientName', 'phone', 'entryDate', 'transactionCode', 'category', 'serialNumber', 'supplier', 'description', 'quantity', 'unit', 'unitPrice', 'total', 'observation'];
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
  const dict = LANGUAGES[state.lang] || LANGUAGES.pt;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  setupDeviceCompatibility();
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
  ['companyName', 'companyAddress', 'defaultCategory', 'currency'].forEach((id) => {
    document.getElementById(id).value = state.settings[id] || '';
  });

  document.getElementById('saveSettings').addEventListener('click', () => {
    state.settings = {
      companyName: document.getElementById('companyName').value,
      companyAddress: document.getElementById('companyAddress').value,
      defaultCategory: document.getElementById('defaultCategory').value,
      currency: document.getElementById('currency').value
    };
    localStorage.setItem('recycle_settings', JSON.stringify(state.settings));
    alert('Configurações salvas!');
  });

  document.getElementById('exportExcel').addEventListener('click', exportExcelLikeCSV);
  document.getElementById('printHistory').addEventListener('click', generateHistoryPrint);
}

function init() {
  fillLanguageSelector();
  setupDeviceCompatibility();
  applyTranslations();
  setupTabs();
  setupSettings();
  createForm('purchase', document.getElementById('purchaseFormContainer'));
  createForm('sale', document.getElementById('saleFormContainer'));
  document.getElementById('searchInput').addEventListener('input', refreshSearch);
  document.getElementById('searchTypeFilter').addEventListener('change', refreshSearch);
  document.getElementById('chartType').addEventListener('change', refreshSummary);
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
