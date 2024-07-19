window.BENCHMARK_DATA = {
  "lastUpdate": 1721196598549,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37",
          "message": "WIP",
          "timestamp": "2024-07-17T13:32:57+09:00",
          "tree_id": "020e5cff39f83f49989c56e5864a833fff8a016b",
          "url": "https://github.com/planetarium/libplanet/commit/ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37"
        },
        "date": 1721191253578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203212.64788732395,
            "unit": "ns",
            "range": "± 9907.120606770799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192953.35294117648,
            "unit": "ns",
            "range": "± 4952.625822563666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165913.94444444444,
            "unit": "ns",
            "range": "± 3533.274975933172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2980050.2666666666,
            "unit": "ns",
            "range": "± 17608.078699711623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2872583.6,
            "unit": "ns",
            "range": "± 29484.86410443743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12409.270588235295,
            "unit": "ns",
            "range": "± 686.046600323277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59574.5,
            "unit": "ns",
            "range": "± 3032.3952710687304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50317.25,
            "unit": "ns",
            "range": "± 961.5330467539844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54470.44329896907,
            "unit": "ns",
            "range": "± 7448.889055827207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3241.987804878049,
            "unit": "ns",
            "range": "± 179.0364811367728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12473.4375,
            "unit": "ns",
            "range": "± 233.0031383908809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004767.0963855422,
            "unit": "ns",
            "range": "± 50484.6603465614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928670.2,
            "unit": "ns",
            "range": "± 72477.34048326602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661178.0147058824,
            "unit": "ns",
            "range": "± 71063.02676266627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8406709.444444444,
            "unit": "ns",
            "range": "± 244276.59369943084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687979.679387019,
            "unit": "ns",
            "range": "± 6343.759748829827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214398.2381417411,
            "unit": "ns",
            "range": "± 3171.3126719910206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769874.9095552885,
            "unit": "ns",
            "range": "± 1053.95278497931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957582.6203125,
            "unit": "ns",
            "range": "± 3186.161432274941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618787.0813337053,
            "unit": "ns",
            "range": "± 859.6736085791027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586100.2868489583,
            "unit": "ns",
            "range": "± 1364.0265731203963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393049.1666666665,
            "unit": "ns",
            "range": "± 61076.815773372575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562910.3333333335,
            "unit": "ns",
            "range": "± 33191.25490174153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2999620.214285714,
            "unit": "ns",
            "range": "± 43953.92905764393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2562642.6,
            "unit": "ns",
            "range": "± 38226.28345374049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3274183.8571428573,
            "unit": "ns",
            "range": "± 48477.04460813964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31607.866666666665,
            "unit": "ns",
            "range": "± 287.61652710973806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10506805.423076924,
            "unit": "ns",
            "range": "± 93869.03752343965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27146725.5,
            "unit": "ns",
            "range": "± 96823.69391758482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68322773.5,
            "unit": "ns",
            "range": "± 167104.2629010173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137449354.66666666,
            "unit": "ns",
            "range": "± 398808.7029783052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286648726.15384614,
            "unit": "ns",
            "range": "± 906860.6441343718"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e6cfa1de04ae4667f0f352a2ba916758192fb277",
          "message": "fix: Change evidence query name from evidence to committedEvidence",
          "timestamp": "2024-07-17T14:50:00+09:00",
          "tree_id": "58b18bcdc000d55ea8bef584b7d5983c89ea3940",
          "url": "https://github.com/planetarium/libplanet/commit/e6cfa1de04ae4667f0f352a2ba916758192fb277"
        },
        "date": 1721196187169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199514.84782608695,
            "unit": "ns",
            "range": "± 7620.174871039208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192854.8064516129,
            "unit": "ns",
            "range": "± 7640.771496942065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169822.76470588235,
            "unit": "ns",
            "range": "± 3364.9590363296356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3042466.6,
            "unit": "ns",
            "range": "± 50570.623685806255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791990.1153846155,
            "unit": "ns",
            "range": "± 20045.253264129064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14772.020202020201,
            "unit": "ns",
            "range": "± 2976.8215619738803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60742.44565217391,
            "unit": "ns",
            "range": "± 3618.788879315539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50301.53846153846,
            "unit": "ns",
            "range": "± 512.2607759375127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51731.744897959186,
            "unit": "ns",
            "range": "± 8069.085286898493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2679.3092783505153,
            "unit": "ns",
            "range": "± 217.62569934909368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12086.182926829268,
            "unit": "ns",
            "range": "± 654.2481336967259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015175.4197530864,
            "unit": "ns",
            "range": "± 52679.61004669269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1945147.8333333333,
            "unit": "ns",
            "range": "± 63553.95141160439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1690522.2241379311,
            "unit": "ns",
            "range": "± 92009.60494157342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8373706.8,
            "unit": "ns",
            "range": "± 292291.7240263877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749824.5212053573,
            "unit": "ns",
            "range": "± 4264.865710005959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206275.5934244792,
            "unit": "ns",
            "range": "± 1301.2319208935705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766170.6365885417,
            "unit": "ns",
            "range": "± 987.0732612018679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984350.3578125,
            "unit": "ns",
            "range": "± 3550.2142587694607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628453.34453125,
            "unit": "ns",
            "range": "± 1287.8811728761164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576352.8347516741,
            "unit": "ns",
            "range": "± 672.4768569291402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438277.8333333335,
            "unit": "ns",
            "range": "± 35739.537819113015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508544.1666666665,
            "unit": "ns",
            "range": "± 52782.28809988085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3077012.566666667,
            "unit": "ns",
            "range": "± 37391.08176417524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604565.7,
            "unit": "ns",
            "range": "± 58315.766507685956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3249922,
            "unit": "ns",
            "range": "± 40748.86865037745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32583.333333333332,
            "unit": "ns",
            "range": "± 352.67825617827987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10436783.9,
            "unit": "ns",
            "range": "± 54107.92457909601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26623205.933333334,
            "unit": "ns",
            "range": "± 83540.82085121764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68196021.28571428,
            "unit": "ns",
            "range": "± 224329.86900422012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138727641.53333333,
            "unit": "ns",
            "range": "± 481098.3300937356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286622323.64285713,
            "unit": "ns",
            "range": "± 730504.8707298901"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17",
          "message": "Changelog",
          "timestamp": "2024-07-17T14:59:17+09:00",
          "tree_id": "f60f63292b146abc9a4f45f1c0f90629c5e720a7",
          "url": "https://github.com/planetarium/libplanet/commit/3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17"
        },
        "date": 1721196573201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212789.53157894738,
            "unit": "ns",
            "range": "± 12802.808178870353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233253.20754716982,
            "unit": "ns",
            "range": "± 9159.620581994419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173974.64705882352,
            "unit": "ns",
            "range": "± 7022.140402536907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186894.5,
            "unit": "ns",
            "range": "± 23421.9859262781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3047535.5,
            "unit": "ns",
            "range": "± 36546.685714723426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22891.775510204083,
            "unit": "ns",
            "range": "± 6020.8482581820535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76905.01086956522,
            "unit": "ns",
            "range": "± 5347.547689977515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59523.85106382979,
            "unit": "ns",
            "range": "± 9465.598243176995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67208.28409090909,
            "unit": "ns",
            "range": "± 9487.958742652327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4337.942105263158,
            "unit": "ns",
            "range": "± 835.4018871788019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14210.22340425532,
            "unit": "ns",
            "range": "± 2090.6492658453462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041987.3068181818,
            "unit": "ns",
            "range": "± 61794.754139842895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2040564.5098039217,
            "unit": "ns",
            "range": "± 82649.62486868832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1773311.4666666666,
            "unit": "ns",
            "range": "± 120081.61464633922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8468410.333333334,
            "unit": "ns",
            "range": "± 316640.1895334398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769915.3611778845,
            "unit": "ns",
            "range": "± 6176.22786612434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211266.9186197917,
            "unit": "ns",
            "range": "± 1125.8998357823812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765127.9636067708,
            "unit": "ns",
            "range": "± 1772.8393277742891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967703.3338541666,
            "unit": "ns",
            "range": "± 2183.2356710102076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619102.8860677084,
            "unit": "ns",
            "range": "± 1187.7427089938164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569436.7874348959,
            "unit": "ns",
            "range": "± 1667.735594252443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2491177.052631579,
            "unit": "ns",
            "range": "± 54297.09401828435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2651107.285714286,
            "unit": "ns",
            "range": "± 73706.05564365098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3178472,
            "unit": "ns",
            "range": "± 69549.67817852821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2835377.785714286,
            "unit": "ns",
            "range": "± 45463.34036795017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3331362.714285714,
            "unit": "ns",
            "range": "± 35185.482402719565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34954.608695652176,
            "unit": "ns",
            "range": "± 4064.06305371102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10933477.366666667,
            "unit": "ns",
            "range": "± 68913.27624306061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27853539.85714286,
            "unit": "ns",
            "range": "± 90451.08427623879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69779424.92307693,
            "unit": "ns",
            "range": "± 228647.39064203264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141642958.8,
            "unit": "ns",
            "range": "± 664412.6566800184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290304106.2307692,
            "unit": "ns",
            "range": "± 697410.6982962232"
          }
        ]
      }
    ]
  }
}