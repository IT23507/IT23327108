const { test, expect } = require("@playwright/test");

// Configuration
const CONFIG = {
  url: "https://www.swifttranslator.com/",
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000,
  },
  selectors: {
    inputField: "Input Your Singlish Text Here.",
    outputContainer:
      "div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap",
  },
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: "Pos_Fun_0001",
      name: "Convert sentence with English technical term",
      input: "Zoom meeting ekak thiyennee adha raee.",
      expected: "Zoom meeting එකක් තියෙන්නේ අද රෑ.",
      category: "Mixed Singlish + English",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0002",
      name: "Convert medium sentence about tiredness and rest",
      input:
        "mata adha godak nidhimathayi, ee hindha mama tikak nidhaaganna hithan innee.",
      expected: "මට අද ගොඩක් නිදිමතයි, ඒ හින්ද මම ටිකක් නිදාගන්න හිතන් ඉන්නේ.",
      category: "Greeting / request / response",
      grammar: "Compound sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0003",
      name: "Convert medium urgent command with reason",
      input:
        "mama dhaen call karanavaa, oyaa pramaadhaven innepaa, vahaama enna saha mata kiyanna mokadhdha unee kiyalaa.",
      expected:
        "මම දැන් call කරනවා, ඔයා ප්‍රමාදවෙන් ඉන්නෙපා, වහාම එන්න සහ මට කියන්න මොකද්ද උනේ කියලා.",
      category: "Daily language usage",
      grammar: "Imperative (command)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0004",
      name: "Convert negative sentence",
      input: "mama ehema jaraa vaedak oyaata karannee naehae.",
      expected: "මම එහෙම ජරා වැඩක් ඔයාට කරන්නේ නැහැ.",
      category: "Daily language usage",
      grammar: "Negation (negative form)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0005",
      name: "Convert compound sentence",
      input: "api kaeema kanna yanavaa saha passe film ekak balanavaa.",
      expected: "අපි කෑම කන්න යනවා සහ පස්සෙ film එකක් බලනවා.",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0006",
      name: "Convert complex cause-effect sentence",
      input: "meheta hodhatama vaessa unath api rassaavata yanna epaeyi.",
      expected: "මෙහෙට හොදටම වැස්ස උනත් අපි රස්සාවට යන්න එපැයි.",
      category: "Daily language usage",
      grammar: "Complex sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0007",
      name: "Convert future tense sentence",
      input: "api heta oyaalage gedhara enavaa.",
      expected: "අපි හෙට ඔයාලගෙ ගෙදර එනවා.",
      category: "Daily language usage",
      grammar: "Future tense",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0008",
      name: "Convert mixed Singlish and English",
      input: "please email eka office ekata yavanna.",
      expected: "please email එක office එකට යවන්න.",
      category: "Mixed Singlish + English",
      grammar: "Imperative (command)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0009",
      name: "Convert sentence with numbers",
      input: "mama dhavas 2 kata passee enavaa.",
      expected: "මම දවස් 2 කට පස්සේ එනවා.",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0010",
      name: "Convert long paragraph",
      input:
        "mama adha office giyaa. passe meeting ekak thibunaa saha email godak yavanna unaa.",
      expected:
        "මම අද office ගියා. පස්සෙ meeting එකක් තිබුනා සහ email ගොඩක් යවන්න උනා.",
      category: "Mixed Singlish + English",
      grammar: "Compound sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0011",
      name: "Pronoun variation (you)",
      input: "oyaa gedhara yanavaa.",
      expected: "ඔයා ගෙදර යනවා.",
      category: "Daily language usage",
      grammar: "Pronoun variation (you/we/they)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0012",
      name: "Plural pronoun usage (we)",
      input: "api udhaeesanama avadhi vii paasal yanavaa.",
      expected: "අපි උදෑසනම අවදි වී පාසල් යනවා.",
      category: "Daily language usage",
      grammar: "Plural form",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0013",
      name: "Interrogative question with tense",
      input: "oyaa heta iskoolee enavadha?",
      expected: "ඔයා හෙට ඉස්කෝලේ එනවද?",
      category: "Greeting / request / response",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0014",
      name: "Imperative command with object",
      input: "mata mee dhaenma kiyanna.",
      expected: "මට මේ දැන්ම කියන්න.",
      category: "Daily language usage",
      grammar: "Imperative (command)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0015",
      name: "Greeting transliteration",
      input: "aayuboovan! , oba dhepalata",
      expected: "ආයුබෝවන්! , ඔබ දෙපලට",
      category: "Greeting / request / response",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0016",
      name: "Polite request form",
      input:
        "karuNaakaralaa mata podi udhavvak karanna, mata mee badutika ussanna udhavvu karanna puLuvandha?",
      expected:
        "කරුණාකරලා මට පොඩි උදව්වක් කරන්න, මට මේ බඩුටික උස්සන්න උදව්වු කරන්න පුළුවන්ද?",
      category: "Greeting / request / response",
      grammar: "Interrogative (question)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0017",
      name: "Sentence with English place name",
      input:
        "api trip eka Kandy valata yamudha saha passee Temple eka balalaa night eka hotel ekaka imudha?",
      expected:
        "අපි trip එක Kandy වලට යමුද සහ පස්සේ Temple එක බලලා night එක hotel එකක ඉමුද?",
      category: "Names / places / common English words",
      grammar: "Interrogative (question)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0018",
      name: "Joined word variation (missing spaces)",
      input: "mamakussiyatayanavaa",
      expected: "මමකුස්සියටයනවා",
      category: "Formatting (spaces / line breaks / paragraph)",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0019",
      name: "Convert request about sending message later",
      input:
        "oyaa free unoth passee mata message ekak dhenna, api passee kathaa karamu.",
      expected:
        "ඔයා free උනොත් පස්සේ මට message එකක් දෙන්න, අපි පස්සේ කතා කරමු.",
      category: "Greeting / request / response",
      grammar: "Imperative (command)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0020",
      name: "Past tense sentence conversion",
      input: "mama iiyee vaedata giyaa.",
      expected: "මම ඊයේ වැඩට ගියා.",
      category: "Daily language usage",
      grammar: "Past tense",
      length: "S",
    },
    {
      tcId: "Pos_Fun_0021",
      name: "Negation pattern sentence",
      input: "mama ohu piLibaDHAva kisidhu dheyak dhannee naee.",
      expected: "මම ඔහු පිළිබඳව කිසිදු දෙයක් දන්නේ නෑ.",
      category: "Daily language usage",
      grammar: "Negation (negative form)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0022",
      name: "Sentence with abbreviation",
      input: "magee NIC eka office ekata genna.",
      expected: "මගේ NIC එක office එකට ගෙන්න.",
      category: "Names / places / common English words",
      grammar: "Imperative (command)",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0023",
      name: "Currency and numbers handling",
      input: "Rs. 5343 mama bank ekata deposit karannam.",
      expected: "Rs. 5343 මම bank එකට deposit කරන්නම්.",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Pos_Fun_0024",
      name: "Paragraph-style long input transliteration",
      input:
        "mama adha udhaeesaninma naegitalaa office ekata yanna sudhaanam vuNaa, haebaeyi maGAdhii traffic godak thibuNu nisaa poddak parakku vuNaa. office ekee meeting ekak thibuNaa saha eekata passee documents tika hariyata balannath oona vuNaa. mama lunch velaavee poddak rest karalaa saha avasaanayee email ekak yavalaa gedhara enna hithanavaa. heta aluth vaeda tikak thiyenavaa, ee nisaa mama kalin nidhaaganna oonee.",
      expected:
        "මම අද උදෑසනින්ම නැගිටලා office එකට යන්න සුදානම් වුණා, හැබැයි මඟදී traffic ගොඩක් තිබුණු නිසා පොඩ්ඩක් පරක්කු වුණා. office එකේ meeting එකක් තිබුණා සහ ඒකට පස්සේ documents ටික හරියට බලන්නත් ඕන වුණා. මම lunch වෙලාවේ පොඩ්ඩක් rest කරලා සහ අවසානයේ email එකක් යවලා ගෙදර එන්න හිතනවා. හෙට අලුත් වැඩ ටිකක් තියෙනවා, ඒ නිසා මම කලින් නිදාගන්න ඕනේ.",
      category: "Formatting (spaces / line breaks / paragraph)",
      grammar: "Compound sentence",
      length: "L",
    },
  ],

  negative: [
    {
      tcId: "Neg_Fun_0001",
      name: "Incorrect Singlish spelling causes wrong output",
      input: "mama yaaluvekge gedra yanavaa.",
      expected: "මම යාලුවෙක්ගෙ ගෙදර යනවා.",
      category: "Typographical error handling",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0002",
      name: "Unsupported character inside sentence",
      input: "mama @gamee yanavaa.",
      expected: "මම ගමේ යනවා.",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0003",
      name: "Mixed Sinhala letters inside Singlish input",
      input: "mama කැම් පස් yanavaa.",
      expected: "මම කැම්පස් යනවා.",
      category: "Mixed Singlish + English",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0004",
      name: "Misspelled vowel repetition in common word",
      input: "mata kirii oonee habai tikak ikmanata dhenna.",
      expected: "මට කිරි ඕනේ හැබැයි ටිකක් ඉක්මනට දෙන්න.",
      category: "Typographical error handling",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Neg_Fun_0005",
      name: "Numbers mixed inside conversational sentence",
      input:
        "mama 2 paarak call karaa haebaeyi oyaagee phone eka answer unee nae.",
      expected:
        "මම දෙපාරක් පාරක් call කරා හැබැයි ඔයාගේ phone එක answer උනේ නැ.",
      category: "Punctuation / numbers",
      grammar: "Simple sentence",
      length: "M",
    },
    {
      tcId: "Neg_Fun_0006",
      name: "Wrong question structure",
      input: "oyaa kohomadha enavaa?",
      expected: "ඔයා කොහොමද එන්නෙ?",
      category: "Daily language usage",
      grammar: "Interrogative (question)",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0007",
      name: "Incorrect word order affecting meaning",
      input: "yanavaa mama gedhara dhaen oyaata message ekak dhaalaa.",
      expected: "මම දැන් ගෙදර යනවා ඔයාට message එකක් දාලා.",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },
    {
      tcId: "Neg_Fun_0008",
      name: "Incorrect negation spelling causes wrong output",
      input: "mama ehema karanne nehe.",
      expected: "මම එහෙම කරන්නේ නැහැ.",
      category: "Typographical error handling",
      grammar: "Negation (negative form)",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0009",
      name: "Incorrect tense marker usage",
      input: "mama heta gamei giyaa.",
      expected: "මම හෙට ගමේ යනවා.",
      category: "Daily language usage",
      grammar: "Present tense / Past tense / Future tense",
      length: "S",
    },
    {
      tcId: "Neg_Fun_0010",
      name: "Incorrect number-word mixture",
      input: "mama dhavas twokata passe enavaa.",
      expected: "මම දවස් දෙකකට පස්සෙ එනවා.",
      category: "Punctuation / numbers",
      grammar: "Future tense",
      length: "M",
    },
  ],

  ui: {
    tcId: "Pos_UI_0001",
    name: "Input field accepts valid Singlish text",
    input: "mama allapu gedharata yanavaa.",
    partialInput: "mama allapu",
    expectedFull: "මම අල්ලපු ගෙදරට යනවා.",
    category: "Daily language usage",
    grammar: "Simple sentence",
    length: "S",
  },
}; // Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole("textbox", {
      name: CONFIG.selectors.inputField,
    });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator("textarea") })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll(
            ".w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap",
          ),
        );
        const output = elements.find((el) => {
          const isInputField =
            el.tagName === "TEXTAREA" || el.getAttribute("role") === "textbox";
          return (
            !isInputField && el.textContent && el.textContent.trim().length > 0
          );
        });
        return output !== undefined;
      },
      { timeout: 30000 },
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe("SwiftTranslator - Singlish to Sinhala Conversion Tests", () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe("Positive Functional Tests", () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(
          testCase.input,
        );
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe("Negative Functional Tests", () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(
          testCase.input,
        );
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe("UI Functionality Tests", () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();

      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });

      // Wait for partial output
      await page.waitForTimeout(1500);

      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);

      // Complete typing
      await input.pressSequentially(
        TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length),
        { delay: 150 },
      );

      // Wait for full translation
      await translator.waitForOutput();

      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});