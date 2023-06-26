window.BENCHMARK_DATA = {
  "lastUpdate": 1687424964748,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686719295732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12377337.188888889,
            "unit": "ns",
            "range": "± 4433353.93209263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28152488.261363637,
            "unit": "ns",
            "range": "± 9042697.609103993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59514595.51190476,
            "unit": "ns",
            "range": "± 8109129.721867984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147542318.16842106,
            "unit": "ns",
            "range": "± 42384942.194066525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288498954.96875,
            "unit": "ns",
            "range": "± 74908455.5987617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84501.31818181818,
            "unit": "ns",
            "range": "± 12788.910132624878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414265.8901098901,
            "unit": "ns",
            "range": "± 61259.41984116956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387498.9666666667,
            "unit": "ns",
            "range": "± 52375.485419262426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359564.5909090909,
            "unit": "ns",
            "range": "± 40339.20280517648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5161641.568181818,
            "unit": "ns",
            "range": "± 868111.2884136006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4639337.021276596,
            "unit": "ns",
            "range": "± 726829.639895497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30640.652173913044,
            "unit": "ns",
            "range": "± 7238.314276059463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126546.9540229885,
            "unit": "ns",
            "range": "± 16264.66596065886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129604.22941176471,
            "unit": "ns",
            "range": "± 10443.926498195968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145989.43258426967,
            "unit": "ns",
            "range": "± 23863.601295981825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8812.357142857143,
            "unit": "ns",
            "range": "± 1341.2281649578458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25858.5,
            "unit": "ns",
            "range": "± 5357.1268750661075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1896045.9325842697,
            "unit": "ns",
            "range": "± 397709.8291853393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3568802.727272727,
            "unit": "ns",
            "range": "± 552828.9268621297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2891381.7,
            "unit": "ns",
            "range": "± 386494.05730422406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7936193.606382979,
            "unit": "ns",
            "range": "± 1033171.7362720732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3907888.1075268816,
            "unit": "ns",
            "range": "± 696650.5435799411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4437187.370588236,
            "unit": "ns",
            "range": "± 946698.6022139151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5274306.316091954,
            "unit": "ns",
            "range": "± 888433.8601274133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4784918.441860465,
            "unit": "ns",
            "range": "± 415912.0665699197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10546780.711111112,
            "unit": "ns",
            "range": "± 2327509.559742321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7760730.392771292,
            "unit": "ns",
            "range": "± 622757.5334658353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2226431.1438934947,
            "unit": "ns",
            "range": "± 145036.7406887422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493937.4118652344,
            "unit": "ns",
            "range": "± 81845.74679614272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2922191.876369201,
            "unit": "ns",
            "range": "± 198041.96943385043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 970894.7134874132,
            "unit": "ns",
            "range": "± 19755.86946006858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817538.5298800998,
            "unit": "ns",
            "range": "± 39543.82758458389"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bf530b3a61065aa6c8c96bbf8aa05065d82a731",
          "message": "Merge pull request #3212 from OnedgeLee/prepare/2.0.1\n\n🔧 Prepare 2.0.1",
          "timestamp": "2023-06-14T14:00:32+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/planetarium/libplanet/commit/0bf530b3a61065aa6c8c96bbf8aa05065d82a731"
        },
        "date": 1686719756069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8515140.885714285,
            "unit": "ns",
            "range": "± 408808.60597621795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20139503.769230768,
            "unit": "ns",
            "range": "± 289489.62186238327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52686734.46428572,
            "unit": "ns",
            "range": "± 1464049.0897460822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101483914.75,
            "unit": "ns",
            "range": "± 1119989.0947883965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208801437.83333334,
            "unit": "ns",
            "range": "± 3729277.612385419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64679.755319148935,
            "unit": "ns",
            "range": "± 10931.481957090593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329483.02127659577,
            "unit": "ns",
            "range": "± 23298.217059006354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316448.1914893617,
            "unit": "ns",
            "range": "± 28668.143766874873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302874.43684210523,
            "unit": "ns",
            "range": "± 21550.958484292834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198586.2,
            "unit": "ns",
            "range": "± 146879.04318846503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801602.4583333335,
            "unit": "ns",
            "range": "± 96482.75971654174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17211.911111111112,
            "unit": "ns",
            "range": "± 1887.3835384530275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93021.74468085106,
            "unit": "ns",
            "range": "± 11913.62998651614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98188.08602150538,
            "unit": "ns",
            "range": "± 11414.927006237807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115961.4052631579,
            "unit": "ns",
            "range": "± 14251.617831322812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6112.950549450549,
            "unit": "ns",
            "range": "± 632.4609652203625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17026.06989247312,
            "unit": "ns",
            "range": "± 1674.6917847372074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639487.505050505,
            "unit": "ns",
            "range": "± 183743.81087982332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050023.564705882,
            "unit": "ns",
            "range": "± 164007.8900620512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638520.6836734693,
            "unit": "ns",
            "range": "± 233910.6991782851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7019886.384615385,
            "unit": "ns",
            "range": "± 359971.9356929807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369985.8846153845,
            "unit": "ns",
            "range": "± 169494.17525355445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587540.6279069767,
            "unit": "ns",
            "range": "± 130715.69200094847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4572937.061538462,
            "unit": "ns",
            "range": "± 213424.8966543088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4465630.243243244,
            "unit": "ns",
            "range": "± 221780.67684551887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7719517.472222222,
            "unit": "ns",
            "range": "± 218066.81658800767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6589513.600446428,
            "unit": "ns",
            "range": "± 91071.32224759865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2060531.8253348214,
            "unit": "ns",
            "range": "± 17563.47082982481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320173.457877604,
            "unit": "ns",
            "range": "± 10850.92392839025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596595.55078125,
            "unit": "ns",
            "range": "± 36977.137626920994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910908.2422526042,
            "unit": "ns",
            "range": "± 8009.018891457946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770154.3746744791,
            "unit": "ns",
            "range": "± 6242.878234040941"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5235ad9aa1026917069c71af2ac4a4270be4c3d7",
          "message": "Merge pull request #3225 from moreal/fix-tx-bug",
          "timestamp": "2023-06-22T15:21:33+09:00",
          "tree_id": "8cea5e90c0935e829cfdf8d7354089b2b37087c8",
          "url": "https://github.com/planetarium/libplanet/commit/5235ad9aa1026917069c71af2ac4a4270be4c3d7"
        },
        "date": 1687415739910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7629891.615384615,
            "unit": "ns",
            "range": "± 91182.14948711038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19076064.26190476,
            "unit": "ns",
            "range": "± 433080.7606621316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47344126.807692304,
            "unit": "ns",
            "range": "± 1258590.034266473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94593878.06666666,
            "unit": "ns",
            "range": "± 1659728.9363707844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199061295.5,
            "unit": "ns",
            "range": "± 3963039.951449114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65274.905263157896,
            "unit": "ns",
            "range": "± 13330.707655533986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313184.43617021275,
            "unit": "ns",
            "range": "± 20936.11455544408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300597.4210526316,
            "unit": "ns",
            "range": "± 19354.100300397582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289202.1855670103,
            "unit": "ns",
            "range": "± 26060.932387040044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174063.28,
            "unit": "ns",
            "range": "± 111273.3229842625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759800,
            "unit": "ns",
            "range": "± 85506.24505970617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18869.755319148935,
            "unit": "ns",
            "range": "± 2359.5697971578584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94774.65263157895,
            "unit": "ns",
            "range": "± 8786.727281202126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94129.69191919192,
            "unit": "ns",
            "range": "± 14639.456293347508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113326.51063829787,
            "unit": "ns",
            "range": "± 15830.454629418547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7001.729166666667,
            "unit": "ns",
            "range": "± 1140.1638984597248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17646.516853932586,
            "unit": "ns",
            "range": "± 1578.9647724232566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710632.398989899,
            "unit": "ns",
            "range": "± 184495.3038532636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189213.9166666665,
            "unit": "ns",
            "range": "± 124964.51085022284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2749653.97,
            "unit": "ns",
            "range": "± 254450.35599032894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6722755.6,
            "unit": "ns",
            "range": "± 200395.21330311263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121205.6885245903,
            "unit": "ns",
            "range": "± 137548.09466395635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453169.6153846155,
            "unit": "ns",
            "range": "± 49111.77718317414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237399.153846154,
            "unit": "ns",
            "range": "± 111517.74579525623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4320188.928571428,
            "unit": "ns",
            "range": "± 183613.40769264073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7596104.345454546,
            "unit": "ns",
            "range": "± 319735.9746867671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6422324.3953125,
            "unit": "ns",
            "range": "± 54579.89533401251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2031513.6238839286,
            "unit": "ns",
            "range": "± 19285.888386994247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283329.0483072917,
            "unit": "ns",
            "range": "± 7016.277599567813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580397.748798077,
            "unit": "ns",
            "range": "± 19468.947318095295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817607.6621791294,
            "unit": "ns",
            "range": "± 3731.066493765839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 690274.0784505209,
            "unit": "ns",
            "range": "± 5959.455915524099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4af83d55d4e9cf249517cd3cf2102c10b2172cf",
          "message": "Merge pull request #3232 from moreal/release-2.0.1",
          "timestamp": "2023-06-22T16:37:38+09:00",
          "tree_id": "6cea483aef8aa810fc1a1aec2efecb1c78d25dc6",
          "url": "https://github.com/planetarium/libplanet/commit/a4af83d55d4e9cf249517cd3cf2102c10b2172cf"
        },
        "date": 1687420776530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10436142.74742268,
            "unit": "ns",
            "range": "± 2226152.2358565517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28014151.387096774,
            "unit": "ns",
            "range": "± 6761513.269943995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64527874.426966295,
            "unit": "ns",
            "range": "± 10755800.4135919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129480758.68181819,
            "unit": "ns",
            "range": "± 18235134.071482178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254944510.0505618,
            "unit": "ns",
            "range": "± 23187497.836481135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81573.41666666667,
            "unit": "ns",
            "range": "± 7855.134470344143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378416.6538461539,
            "unit": "ns",
            "range": "± 48903.55605632218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 390929.74742268043,
            "unit": "ns",
            "range": "± 74805.10292615279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 385197.6701030928,
            "unit": "ns",
            "range": "± 69298.8900139163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4679351.5578947365,
            "unit": "ns",
            "range": "± 322205.5419330601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835097.7536231885,
            "unit": "ns",
            "range": "± 182731.72967643398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25432.1091954023,
            "unit": "ns",
            "range": "± 2787.135398436321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131366.414893617,
            "unit": "ns",
            "range": "± 21501.29776998947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115695.2356321839,
            "unit": "ns",
            "range": "± 9400.974544311102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120130.90625,
            "unit": "ns",
            "range": "± 18820.83806265258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7444.45744680851,
            "unit": "ns",
            "range": "± 1417.022242522736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21140.784210526315,
            "unit": "ns",
            "range": "± 4349.065687539713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1886143.9032258065,
            "unit": "ns",
            "range": "± 283370.7744940733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3319919.5280898875,
            "unit": "ns",
            "range": "± 431467.09377499286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828017.2045454546,
            "unit": "ns",
            "range": "± 431800.29438451683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7561976.790697674,
            "unit": "ns",
            "range": "± 874038.5165504116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3511494.8314606743,
            "unit": "ns",
            "range": "± 261089.50983180062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3989924.4555555554,
            "unit": "ns",
            "range": "± 564111.0163296892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4980076.377777778,
            "unit": "ns",
            "range": "± 522029.45204992127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5436524.563218391,
            "unit": "ns",
            "range": "± 937814.1029346059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644062.735294119,
            "unit": "ns",
            "range": "± 697068.7980681207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7010633.078125,
            "unit": "ns",
            "range": "± 101654.99438508516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110433.013671875,
            "unit": "ns",
            "range": "± 54321.134639418815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361725.6015097129,
            "unit": "ns",
            "range": "± 45502.076121406164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2904192.988888889,
            "unit": "ns",
            "range": "± 157811.77259317302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005356.661696214,
            "unit": "ns",
            "range": "± 26644.66250768858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789785.9547254774,
            "unit": "ns",
            "range": "± 26009.782857084225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3eed9d36ac41fc7510c5507137d642a6297c75c",
          "message": "Merge pull request #3233 from moreal/prepare-2.0.2\n\nPrepare 2.0.2",
          "timestamp": "2023-06-22T17:50:46+09:00",
          "tree_id": "9760d78f94a110ad84c6768b3f4146663ffaf49c",
          "url": "https://github.com/planetarium/libplanet/commit/a3eed9d36ac41fc7510c5507137d642a6297c75c"
        },
        "date": 1687424903833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8546942.02173913,
            "unit": "ns",
            "range": "± 215417.32893045904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20493703.964285713,
            "unit": "ns",
            "range": "± 569801.3525740535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50814467.85714286,
            "unit": "ns",
            "range": "± 867762.6919665623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101438586.77272727,
            "unit": "ns",
            "range": "± 2203781.8544355137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208982757.26666668,
            "unit": "ns",
            "range": "± 2756333.2560884855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62807.13636363636,
            "unit": "ns",
            "range": "± 5109.17535731217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325758.9893617021,
            "unit": "ns",
            "range": "± 21516.845609891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309878.15591397847,
            "unit": "ns",
            "range": "± 25207.50066318884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311851.9680851064,
            "unit": "ns",
            "range": "± 25402.56191823422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4141292,
            "unit": "ns",
            "range": "± 82196.6786117298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900991.3125,
            "unit": "ns",
            "range": "± 74907.98113260363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17614.13186813187,
            "unit": "ns",
            "range": "± 1778.118651264065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96546.29,
            "unit": "ns",
            "range": "± 13080.949196627418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109204.23404255319,
            "unit": "ns",
            "range": "± 15473.281172406003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120942.44086021505,
            "unit": "ns",
            "range": "± 13948.827005742754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7759.5360824742265,
            "unit": "ns",
            "range": "± 1347.007888354281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20108.78947368421,
            "unit": "ns",
            "range": "± 2886.04331551641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636893.5,
            "unit": "ns",
            "range": "± 155003.8463985907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071652.0425531915,
            "unit": "ns",
            "range": "± 184049.968999008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2654896.09375,
            "unit": "ns",
            "range": "± 249484.10318799358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6984287.152941177,
            "unit": "ns",
            "range": "± 377050.1500278654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3301095.43877551,
            "unit": "ns",
            "range": "± 122616.76907398112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3485858.036363636,
            "unit": "ns",
            "range": "± 147414.25299499615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4448575.5,
            "unit": "ns",
            "range": "± 166618.42590649493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4456663.712765957,
            "unit": "ns",
            "range": "± 309917.33699462726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7994824.926829268,
            "unit": "ns",
            "range": "± 412810.5885577947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6792958.299027423,
            "unit": "ns",
            "range": "± 270189.54408732493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2159383.8467047275,
            "unit": "ns",
            "range": "± 73692.43001087276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413833.124891493,
            "unit": "ns",
            "range": "± 46812.78223327455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2920170.1248828126,
            "unit": "ns",
            "range": "± 183200.51068586658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 930972.7995990954,
            "unit": "ns",
            "range": "± 20448.479338636447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838636.2231445312,
            "unit": "ns",
            "range": "± 14841.907669188678"
          }
        ]
      }
    ]
  }
}